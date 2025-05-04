import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton, Divider } from 'react-native-paper';
import { colors } from '../theme/theme';
import CustomButton from '../components/CustomButton';

const CheckoutScreen = ({ navigation }) => {
  // Payment details
  const amount = 199.00; // Amount in ZAR (R199.00)
  const email = "customer@example.com"; // This would typically come from the user's input or profile
  
  // Handle payment initialization
  const handlePayment = () => {
    // Create payment details to pass to the Payment screen
    const paymentDetails = {
      publicKey: "pk_test_9ec49561dedf533fb1269df5c8538e2da64e090d",
      email: email,
      amount: amount,
      reference: `MLE-${Date.now()}`, // Generate a unique reference
      currency: 'ZAR',
      metadata: {
        custom_fields: [
          {
            display_name: "Product",
            variable_name: "product",
            value: "1 Line (1 eSIM)"
          }
        ]
      }
    };
    
    // Navigate to the Payment screen with the payment details
    navigation.navigate('Payment', { paymentDetails });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headerTitle}>Checkout</Text>
        
        {/* Order summary */}
        <TouchableOpacity style={styles.summaryContainer}>
          <View style={styles.summaryContent}>
            <Text style={styles.summaryTitle}>1 Line (1 eSIM)</Text>
            <Text style={styles.summaryPrice}>R199.00</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>
        
        {/* Billing Account */}
        <View style={styles.accountContainer}>
          <Text style={styles.sectionTitle}>Billing Account</Text>
          <View style={styles.accountDetails}>
            <Text style={styles.accountLabel}>Name</Text>
            <Text style={styles.accountValue}>Tolu Kalejaiye</Text>
          </View>
        </View>

        <Divider style={styles.divider} />

        {/* Total section */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>To be paid now</Text>
          <Text style={styles.totalPrice}>R199.00</Text>
        </View>

        {/* Recurring section */}
        <View style={styles.recurringContainer}>
          <Text style={styles.recurringLabel}>recurring</Text>
          <Text style={styles.recurringPrice}>R199.00</Text>
        </View>

        {/* Payment method section */}
        <Text style={styles.paymentTitle}>Pay with</Text>
        
        <View style={styles.paymentOptionContainer}>
            <View style={styles.paymentOptionRow}>
              <Text style={styles.radioLabel}>Paystack</Text>
              <Text style={styles.checkIcon}>✓</Text>
            </View>
        </View>
      </ScrollView>

      {/* Confirm & Pay button */}
      <View style={styles.buttonContainer}>
        <CustomButton 
          title="Confirm & Pay" 
          onPress={handlePayment}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.text,
  },
  summaryContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryContent: {
    flex: 1,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  summaryPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.price,
    textAlign: 'right',
  },
  chevron: {
    fontSize: 20,
    color: colors.lightText,
    marginLeft: 8,
  },
  accountContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.text,
  },
  accountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountLabel: {
    fontSize: 14,
    color: colors.lightText,
    width: 80,
  },
  accountValue: {
    fontSize: 14,
    color: colors.text,
  },
  divider: {
    height: 1,
    marginVertical: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.price,
  },
  recurringContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 4,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  recurringLabel: {
    color: colors.lightText,
    marginRight: 8,
  },
  recurringPrice: {
    color: colors.price,
    fontWeight: 'bold',
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.text,
  },
  paymentOptionContainer: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    marginBottom: 16,
  },
  radioLabel: {
    fontSize: 14,
    color: colors.text,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: colors.secondary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  paymentOptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  checkIcon: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
