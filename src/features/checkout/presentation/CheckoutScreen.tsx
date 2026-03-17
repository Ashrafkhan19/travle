import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../app/navigation/type';
import { useAppSelector, useAppDispatch } from '../../../app/hook';
import { clearCart } from '../../cart/store/cartSlice';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Checkout'>;

const PAYMENT_METHODS = [
    { id: 'cod', label: 'Cash on Delivery (COD)' },
    { id: 'card', label: 'Credit/Debit Card' },
    { id: 'upi', label: 'UPI' },
];

const CheckoutScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.items);
    
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handlePlaceOrder = () => {
        if (!selectedPaymentMethod) {
            Alert.alert('Payment Method Required', 'Please select a payment method to proceed.');
            return;
        }
        
        // In a real app, an API call would happen here to process payment/create order.
        
        // Clear cart and navigate to success screen
        dispatch(clearCart());
        navigation.navigate('Order Confirmation');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.headerTitle}>Checkout</Text>
                
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Order Summary</Text>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryText}>Total Items:</Text>
                        <Text style={styles.summaryValue}>{items.length}</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryText}>Total Cost:</Text>
                        <Text style={styles.summaryTotal}>${totalPrice.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Select Payment Method</Text>
                    {PAYMENT_METHODS.map((method) => (
                        <TouchableOpacity
                            key={method.id}
                            style={[
                                styles.paymentOption,
                                selectedPaymentMethod === method.id && styles.paymentOptionSelected
                            ]}
                            onPress={() => setSelectedPaymentMethod(method.id)}
                            activeOpacity={0.7}
                        >
                            <View style={styles.radioContainer}>
                                <View style={[
                                    styles.radio,
                                    selectedPaymentMethod === method.id && styles.radioSelected
                                ]} />
                            </View>
                            <Text style={styles.paymentOptionText}>{method.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.orderButton} onPress={handlePlaceOrder}>
                    <Text style={styles.orderButtonText}>Place Order (${totalPrice.toFixed(2)})</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    section: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
        color: '#444',
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    summaryText: {
        fontSize: 16,
        color: '#666',
    },
    summaryValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
    },
    summaryTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e53935',
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 8,
        marginBottom: 12,
    },
    paymentOptionSelected: {
        borderColor: '#4caf50',
        backgroundColor: '#f1f8e9',
    },
    radioContainer: {
        marginRight: 12,
    },
    radio: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#bdbdbd',
        backgroundColor: '#fff',
    },
    radioSelected: {
        borderColor: '#4caf50',
        borderWidth: 6,
    },
    paymentOptionText: {
        fontSize: 16,
        color: '#333',
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    orderButton: {
        backgroundColor: '#4caf50',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    orderButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CheckoutScreen;
