import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CartItem as CartItemProduct } from '../../store/cartSlice';


interface CartItemProps {
    item: CartItemProduct;
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
    onRemove: (id: string) => void;
}

const CartItem = ({ item, onIncrement, onDecrement, onRemove }: CartItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => onDecrement(item.id)}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => onIncrement(item.id)}
                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={styles.removeButton}
                onPress={() => onRemove(item.id)}
            >
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        alignItems: 'center',
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    details: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    price: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        marginHorizontal: 12,
        fontSize: 16,
    },
    removeButton: {
        padding: 8,
    },
    removeButtonText: {
        color: 'red',
        fontSize: 14,
    },
});

export default CartItem;
