import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, BackHandler } from 'react-native';
import { WebView } from 'react-native-webview';
import { colors } from '../theme/theme';

const PaymentScreen = ({ navigation, route }) => {
  const { paymentDetails } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const webViewRef = useRef(null);
  
  // Handle back button to prevent accidental navigation away
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Return to checkout screen on back press
      navigation.goBack();
      return true;
    });
    
    return () => backHandler.remove();
  }, [navigation]);

  // Generate HTML content for Paystack
  const generateHTML = () => {
    const {
      publicKey,
      email,
      amount,
      reference,
      metadata,
      currency
    } = paymentDetails;
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Paystack</title>
      <style>
        body {
          background-color: #f6f6f6;
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body onload="payWithPaystack()">
      <script src="https://js.paystack.co/v2/inline.js"></script>
      <script>
        function payWithPaystack() {
          var paystack = new PaystackPop();
          paystack.checkout({
            key: '${publicKey}',
            email: '${email}',
            amount: ${amount * 100},
            ${currency ? `currency: '${currency}',` : ''}
            reference: '${reference}',
            metadata: ${JSON.stringify(metadata || {})},
            onSuccess: function(response) {
              window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'success', data: response }));
            },
            onCancel: function() {
              window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'cancel' }));
            },
            onError: function(error) {
              window.ReactNativeWebView.postMessage(JSON.stringify({ event: 'error', error: { message: error.message } }));
            }
          });
        }
      </script>
    </body>
    </html>
    `;
  };

  // Handle messages from webview
  const handleMessage = (event) => {
    try {
      const response = JSON.parse(event.nativeEvent.data);
      
      // Always ensure loading is set to false when we get any message
      setIsLoading(false);
      
      if (response.event === 'success') {
        // Get the payment details from the route params
        const { paymentDetails } = route.params;
        
        // Navigate to the Success screen with transaction details
        navigation.navigate('Success', { 
          transactionReference: response.data.reference || response.data.trxref,
          amount: paymentDetails.amount
        });
      } else if (response.event === 'cancel') {
        navigation.goBack();
      } else if (response.event === 'error') {
        // Handle payment errors gracefully
        navigation.goBack();
      } else if (response.event === 'load') {
        // Paystack has loaded, hide our loader
        setIsLoading(false);
      }
    } catch (error) {
      // In case of JSON parsing errors
      setIsLoading(false);
      navigation.goBack();
    }
  };
  
  // Monitor loading state
  useEffect(() => {
    // We're monitoring the loading state to handle edge cases
  }, [isLoading]);

  // Force hide loader after timeout as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        // Force hide loader after timeout as fallback
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout
    
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ html: generateHTML() }}
        onMessage={handleMessage}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        onHttpError={() => setIsLoading(false)}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={styles.webView}
      />
      {isLoading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  webView: {
    flex: 1,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default PaymentScreen;
