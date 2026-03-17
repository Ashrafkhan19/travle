import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../features/home/presentation/HomeScreen";
import DetailScreen from "../../features/detail/presentation/detail";
import CartScreen from "../../features/cart/presentation/CartScreen";
import CheckoutScreen from "../../features/checkout/presentation/CheckoutScreen";
import OrderConfirmationScreen from "../../features/checkout/presentation/OrderConfirmationScreen";
import CartBadge from "../../core/components/CartBadge";


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => <CartBadge />,
        }}
      >
        <Stack.Screen name="Product" component={HomeScreen} />
        <Stack.Screen name="Product Detail" component={DetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Order Confirmation" component={OrderConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}