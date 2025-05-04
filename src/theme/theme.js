import { DefaultTheme } from 'react-native-paper';

// Colors derived from the provided screenshots
export const colors = {
  primary: '#2EB157',     // Main green color
  secondary: '#FFFFFF',   // White
  background: '#F6F6F6',  // Light gray background
  text: '#000000',        // Black text
  lightText: '#757575',   // Gray text
  error: '#FF5252',       // Standard error red
  price: '#2EB157',       // Price text (green)
  warningBackground: '#FFEBEE', // Light pink background for warnings
};

// Theme configuration for React Native Paper
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.background,
    text: colors.text,
    error: colors.error,
  },
  roundness: 8,
};
