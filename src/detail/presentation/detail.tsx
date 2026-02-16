import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/type";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "Detail">;

export default function DetailScreen({ route }: Props) {
  const { item } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22 }}>{item.title}</Text>
      <Text>ID: {item.id}</Text>
    </View>
  );
}