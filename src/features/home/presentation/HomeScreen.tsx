import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Item } from "../domain/item";
import { useAppDispatch, useAppSelector } from "../../../app/hook";
import { fetchProducts } from "../store/prodcutSlice";
import { RootStackParamList } from "../../../app/navigation/type";




type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {

  const dispatch = useAppDispatch();
  const { items, loading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: 'red' }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { item })}
          >
            <Text style={{ fontSize: 18, marginBottom: 12 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export async function getItems(): Promise<Item[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", title: "MacBook Pro M3" },
        { id: "2", title: "iPhone 15 Pro" },
        { id: "3", title: "Samsung Galaxy S24" },
        { id: "4", title: "Sony WH-1000XM5" },
        { id: "5", title: "PlayStation 5" },
      ]);
    }, 1000); // simulate network delay
  });
}