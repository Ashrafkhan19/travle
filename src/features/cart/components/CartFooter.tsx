import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CartFooterProps {
    totalPrice: number;
    onCheckout: () => void;
}

const CartFooter = ({ totalPrice, onCheckout }: CartFooterProps) => {
    return (
        <View style={styles.footer}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton} onPress={onCheckout}>
                <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 24,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: '600',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    checkoutButton: {
        backgroundColor: '#007AFF',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
    },
    checkoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default CartFooter;
