import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../home/presentation/HomeScreen";
import DetailScreen from "../detail/presentation/detail";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}