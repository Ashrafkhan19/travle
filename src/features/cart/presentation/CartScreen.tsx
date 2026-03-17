import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../../app/hook';
import { removeItem, incrementQuantity, decrementQuantity } from '../store/cartSlice';
import EmptyCart from '../components/EmptyCart';
import CartItem from '../components/CartItem';
import CartFooter from '../components/CartFooter';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../app/navigation/type';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

const CartScreen = () => {
    const items = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NavigationProp>();

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleIncrement = (id: string) => dispatch(incrementQuantity(id));
    const handleDecrement = (id: string) => dispatch(decrementQuantity(id));
    const handleRemove = (id: string) => dispatch(removeItem(id));
    const handleCheckout = () => {
        navigation.navigate('Checkout');
    };

    if (items.length === 0) {
        return <EmptyCart />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CartItem
                        item={item}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onRemove={handleRemove}
                    />
                )}
                contentContainerStyle={styles.listContent}
            />
            <CartFooter
                totalPrice={totalPrice}
                onCheckout={handleCheckout}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    listContent: {
        padding: 16,
    },
});

export default CartScreen;
