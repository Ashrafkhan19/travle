import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { fetchProducts } from "../store/prodcutSlice";
import { RootStackParamList } from "../../../app/navigation/type";
import Loader from "../../../core/components/loader";
import Error from "../../../core/components/error";
import NoProduct from "../../../core/components/noProduct";
import ProductItem from "./components/productItem";
import { useLocationPermission } from "../../../core/hooks/useLocationPermission";
import LocationPermissionBanner from "../../../core/components/LocationPermissionBanner";


type Props = NativeStackScreenProps<RootStackParamList, "Product">;

export default function HomeScreen({ navigation }: Props) {

  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.product);
  const [refreshing, setRefreshing] = useState(false);
  const { status: locationStatus, requestPermission, openSettings } = useLocationPermission();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      await dispatch(fetchProducts()).unwrap();
    } finally {
      setRefreshing(false);
    }
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) return <Error onPress={onRefresh} />;

  if (items.length === 0) return <NoProduct />;

  return (
    <View style={{ flex: 1, padding: 16, }}>
      <LocationPermissionBanner
        status={locationStatus}
        onRequestPermission={requestPermission}
        onOpenSettings={openSettings}
      />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} onPress={() => { navigation.navigate("Product Detail", { item: item }) }} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

