import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import { LocationPermissionStatus } from '../hooks/useLocationPermission';

interface Props {
  status: LocationPermissionStatus;
  onRequestPermission: () => void;
  onOpenSettings: () => void;
}

const LocationPermissionBanner: React.FC<Props> = ({
  status,
  onRequestPermission,
  onOpenSettings,
}) => {
  if (status === 'undetermined') {
    return null;
  }

  if (status === 'granted') {
    return (
      <View style={[styles.container, styles.grantedContainer]}>
        <View style={[styles.iconContainer, styles.grantedIconContainer]}>
          {/* <Icon name="location-on" size={28} color="#15803D" /> */}
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, styles.grantedTitle]}>Location Ready</Text>
          <Text style={[styles.message, styles.grantedMessage]}>
            We can now deliver products to your current address.
          </Text>
        </View>
        {/* <Icon name="check-circle" size={24} color="#15803D" /> */}
      </View>
    );
  }

  const isBlocked = status === 'blocked';

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <Icon name="location-off" size={28} color="#E74C3C" /> */}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Location Permission Required</Text>
        <Text style={styles.message}>
          {isBlocked
            ? 'Location access is permanently denied. Please enable it from Settings to receive deliveries.'
            : 'We need your location to deliver products to your address.'}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.button, isBlocked && styles.settingsButton]}
        onPress={isBlocked ? onOpenSettings : onRequestPermission}
        activeOpacity={0.7}>
        {/* <Icon
          name={isBlocked ? 'settings' : 'my-location'}
          size={16}
          color="#fff"
        /> */}
        <Text style={styles.buttonText}>
          {isBlocked ? 'Open Settings' : 'Grant'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    gap: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEE2E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#991B1B',
    marginBottom: 2,
  },
  message: {
    fontSize: 12,
    color: '#7F1D1D',
    lineHeight: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3B82F6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
  },
  settingsButton: {
    backgroundColor: '#6B7280',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  grantedContainer: {
    backgroundColor: '#F0FDF4',
    borderColor: '#BBF7D0',
  },
  grantedIconContainer: {
    backgroundColor: '#DCFCE7',
  },
  grantedTitle: {
    color: '#166534',
  },
  grantedMessage: {
    color: '#14532D',
  },
});

export default LocationPermissionBanner;
