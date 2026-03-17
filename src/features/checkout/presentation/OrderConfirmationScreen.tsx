import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../app/navigation/type';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Order Confirmation'>;

const OrderConfirmationScreen = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleBackToHome = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Product' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconContainer}>
                    <Text style={styles.checkIcon}>✅</Text>
                </View>
                
                <Text style={styles.title}>Order Placed Successfully!</Text>
                <Text style={styles.subtitle}>
                    Thank you for your purchase. Your order has been received and is being processed.
                </Text>
                
                <View style={styles.deliveryInfoCard}>
                    <Text style={styles.deliveryIcon}>🕒</Text>
                    <View style={styles.deliveryTextContainer}>
                        <Text style={styles.deliveryTitle}>Estimated Delivery</Text>
                        <Text style={styles.deliveryTime}>Within 30 minutes</Text>
                    </View>
                </View>

            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.homeButton} onPress={handleBackToHome}>
                    <Text style={styles.homeButtonText}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    iconContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#e8f5e9',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    checkIcon: {
        fontSize: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2e7d32',
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 32,
    },
    deliveryInfoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 12,
        width: '100%',
    },
    deliveryIcon: {
        fontSize: 32,
        marginRight: 16,
    },
    deliveryTextContainer: {
        flex: 1,
    },
    deliveryTitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    deliveryTime: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    footer: {
        padding: 24,
    },
    homeButton: {
        backgroundColor: '#2196f3',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    homeButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default OrderConfirmationScreen;
