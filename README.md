# Melon Paystack App

A React Native mobile checkout app with Paystack payment integration. This app demonstrates how to implement a mobile checkout flow with Paystack in React Native using a WebView approach.

![Melon Paystack App Flow](https://via.placeholder.com/800x400.png?text=Melon+Paystack+App+Flow)

## Demo

You can try this app directly in your browser using Expo Snack:

[Try Melon Paystack App on Expo Snack](https://snack.expo.dev/)

## Features

- Full checkout flow simulation
- WebView-based Paystack integration 
- Clean and modern UI design
- Animated success confirmation screen
- Simple state management
- Reusable components

## App Flow

1. **Cart Screen**: Review items and proceed to checkout
2. **Checkout Screen**: View order summary and payment options
3. **Payment Screen**: Complete payment via Paystack
4. **Success Screen**: View payment confirmation with animation

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/melon-paystack-app.git

# Navigate to the project directory
cd melon-paystack-app

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on a Device

- Scan the QR code with the Expo Go app on your mobile device
- Press 'a' to open on Android emulator (if installed)
- Press 'i' to open on iOS simulator (Mac only, requires Xcode)

## Paystack Integration

This app integrates Paystack using a WebView approach, allowing for:

- Direct integration within your app's UI
- Control over the payment flow
- Customized success/failure handling

### Key Integration Points

1. **Setup in CheckoutScreen.js**:
   ```javascript
   const paymentDetails = {
     publicKey: "YOUR_PAYSTACK_PUBLIC_KEY",
     email: email,
     amount: amount,
     reference: `MLE-${Date.now()}`,
     currency: 'ZAR',
     metadata: { /* Your custom data */ }
   };
   ```

2. **WebView Implementation in PaymentScreen.js**:
   - Creates HTML with Paystack inline JS
   - Handles payment callbacks via postMessage
   - Navigates to success screen on successful payment

3. **Testing**:
   - The app uses a Paystack test key
   - For production, replace with your live key
   - Test card: 4084 0840 8408 4081, any future date, any CVV

## Project Structure

```
melon-paystack-app/
├── App.js                # Main application entry point
├── src/
│   ├── components/       # Reusable components
│   │   ├── CartItem.js   # Shopping cart item
│   │   ├── CustomButton.js
│   │   └── WarningNotice.js
│   ├── navigation/       # Navigation configuration
│   │   └── AppNavigator.js
│   ├── screens/          # App screens
│   │   ├── CartScreen.js
│   │   ├── CheckoutScreen.js
│   │   ├── PaymentScreen.js
│   │   └── SuccessScreen.js
│   └── theme/            # App styling
│       └── theme.js
└── README.md
```

## Dependencies

- `@react-navigation/native` & `@react-navigation/native-stack`: Navigation
- `react-native-paper`: Material Design components
- `react-native-webview`: WebView for Paystack integration
- `react-native-vector-icons`: Icons for UI elements
- `react-native-gesture-handler`: Gesture support

## Configuration

1. **Paystack Public Key**: Replace the test key in `CheckoutScreen.js` with your own Paystack public key:
```javascript
publicKey: "YOUR_PAYSTACK_PUBLIC_KEY"
```

2. **Currency**: The app is configured to use ZAR (South African Rand) by default. To change it, modify the `currency` parameter in `CheckoutScreen.js`.

## Testing

- Use Paystack's test cards for payment testing
- Default test card: `4084 0840 8408 4081`
- Expiry: Any future date
- CVV: Any 3 digits

## Acknowledgements

- [Paystack](https://paystack.com/) for their payment processing service
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
   npm run ios
   # or
   npm run android
   ```

## Implementation Status

- [x] Project setup with navigation
- [x] Theme configuration based on Melon's design
- [x] Shopping cart screen
- [x] Checkout screen
- [x] Paystack integration

## Paystack Integration

This app uses the [React-Native-Paystack-WebView](https://github.com/just1and0/React-Native-Paystack-WebView) library to process payments through Paystack. The integration provides a secure payment flow with the following features:

- Credit card payment processing
- Transaction reference generation
- Success and cancellation handling
- Custom metadata for order tracking

### Setting up Paystack

Before using the payment functionality, you'll need to:

1. Create a Paystack account at [paystack.com](https://paystack.com)
2. Get your API keys from the Paystack Dashboard
3. Replace the placeholder key in `src/screens/CheckoutScreen.js`:

```javascript
paystackKey="YOUR_PAYSTACK_PUBLIC_KEY" // Replace with your actual Paystack PUBLIC key
```

> **Important**: Only use your Paystack **PUBLIC** key in the frontend code. Never include your secret key in the app code.
