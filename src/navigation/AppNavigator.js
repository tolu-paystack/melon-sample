import React from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/theme';

// Import our screens
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.secondary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: () => (
          <React.Fragment>
            <Logo />
          </React.Fragment>
        ),
        headerBackTitle: ' ', // Empty string for back button text
      }}
    >
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'Cart' }}
      />
      <Stack.Screen 
        name="Checkout" 
        component={CheckoutScreen} 
        options={{ title: 'Checkout' }}
      />
      <Stack.Screen 
        name="Payment" 
        component={PaymentScreen} 
        options={{ title: 'Payment' }}
      />
      <Stack.Screen 
        name="Success" 
        component={SuccessScreen} 
        options={{ 
          title: 'Success',
          gestureEnabled: false // Prevent swipe back gesture
        }}
      />
    </Stack.Navigator>
  );
};

// Simple Logo component for the header
const Logo = () => {
  return (
    <React.Fragment>
      <Text style={{ 
        color: 'white', 
        fontSize: 22, 
        fontWeight: 'bold', 
        fontStyle: 'italic' 
      }}>
        melon
      </Text>
    </React.Fragment>
  );
};

export default AppNavigator;
