import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../features/home/presentation/HomeScreen";
import DetailScreen from "../../features/detail/presentation/detail";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={HomeScreen} />
        <Stack.Screen name="Product Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}