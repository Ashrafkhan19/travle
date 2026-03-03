import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../app/hook";
import { useNavigation } from "@react-navigation/native";

const CartBadge = () => {
    const items = useAppSelector((state) => state.cart.items);
    const navigation = useNavigation<any>();

    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.navigate("Cart");
            }}
        >
            <View style={styles.iconContainer}>

                <Text style={{ fontSize: 24 }}>🛒</Text>
                {totalCount > 0 && (
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>{totalCount}</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    iconContainer: {
        position: 'relative',
        padding: 5,
    },
    badge: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default CartBadge;
