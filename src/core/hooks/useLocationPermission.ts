import { useCallback, useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

export type LocationPermissionStatus =
  | 'undetermined'
  | 'granted'
  | 'denied'
  | 'blocked';

function getLocationPermission() {
  return Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
}

function mapResult(result: string): LocationPermissionStatus {
  switch (result) {
    case RESULTS.GRANTED:
    case RESULTS.LIMITED:
      return 'granted';
    case RESULTS.BLOCKED:
    case RESULTS.UNAVAILABLE:
      return 'blocked';
    case RESULTS.DENIED:
      return 'denied';
    default:
      return 'undetermined';
  }
}

export function useLocationPermission() {
  const [status, setStatus] = useState<LocationPermissionStatus>('undetermined');

  const checkPermission = useCallback(async () => {
    const result = await check(getLocationPermission());
    setStatus(mapResult(result));
    return result;
  }, []);

  const requestPermission = useCallback(async () => {
    const currentResult = await check(getLocationPermission());

    if (currentResult === RESULTS.BLOCKED || currentResult === RESULTS.UNAVAILABLE) {
      // Permission permanently denied — open Settings
      setStatus('blocked');
      openSettings();
      return;
    }

    const result = await request(getLocationPermission());
    setStatus(mapResult(result));
  }, []);

  const handleOpenSettings = useCallback(() => {
    openSettings();
  }, []);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  return { status, requestPermission, openSettings: handleOpenSettings };
}
