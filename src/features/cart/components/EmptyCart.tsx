import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyCart = () => {
    return (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 18,
        color: '#888',
    },
});

export default EmptyCart;
