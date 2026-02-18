import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Image, Text, View } from "react-native";
import { RootStackParamList } from "../../../app/navigation/type";
import Button from "../../../core/components/button";

type Props = NativeStackScreenProps<RootStackParamList, "Product Detail">;

export default function DetailScreen({ route }: Props) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, }}>
      <View style={{ gap: 16, padding: 10, }}>
        <View style={{ borderRadius: 10, backgroundColor: 'lightgrey', elevation: 5, marginVertical: 16, paddingHorizontal: 10 }}>
          <Image source={{ uri: item.image }} style={{ width: "100%", height: 400, }} />
        </View>
        <Text style={{ fontSize: 22, fontWeight: 'bold', }}>{item.title}</Text>
        <Text style={{ fontSize: 16, fontWeight: 'medium' }}>{item.description}</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>${item.price}</Text>
      </View>
      <Button title="Add to Cart" />
    </View>
  );
}