import React, { useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Animated, 
  TouchableOpacity, 
  Dimensions,
  Share 
} from 'react-native';
import { colors } from '../theme/theme';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

const SuccessScreen = ({ route, navigation }) => {
  // Extract payment details from route params
  const { transactionReference, amount } = route.params || {};
  
  // Animation values
  const checkmarkScale = useRef(new Animated.Value(0)).current;
  const containerOpacity = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;
  
  // Play animations when component mounts
  useEffect(() => {
    // Sequence of animations
    Animated.sequence([
      Animated.timing(containerOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(checkmarkScale, {
        toValue: 1,
        friction: 4,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  
  // Handle share functionality
  const handleShare = async () => {
    try {
      await Share.share({
        message: `I just completed a payment of R${amount}.00 with transaction reference: ${transactionReference}`,
        title: 'Payment Confirmation',
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
  // Navigate back to Cart screen
  const handleBackToHome = () => {
    navigation.navigate('Cart');
  };
  
  // Animated checkmark icon
  const CheckmarkIcon = () => (
    <Animated.View style={[styles.checkmarkContainer, { transform: [{ scale: checkmarkScale }] }]}>
      <Icon name="check" size={60} color={colors.primary} />
    </Animated.View>
  );
  
  return (
    <Animated.View style={[styles.container, { opacity: containerOpacity }]}>
      <CheckmarkIcon />
      
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.title}>Payment Successful!</Text>
        <Text style={styles.subtitle}>Your order has been confirmed</Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.detailLabel}>Transaction Reference:</Text>
          <Text style={styles.detailValue}>{transactionReference}</Text>
          
          <Text style={styles.detailLabel}>Amount Paid:</Text>
          <Text style={styles.detailValue}>R{amount}.00</Text>
        </View>
        
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Share Receipt</Text>
          </TouchableOpacity>
          
          <CustomButton 
            title="Back to Home" 
            onPress={handleBackToHome} 
            style={styles.homeButton}
            textStyle={styles.homeButtonText}
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  checkmarkContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    marginBottom: 30,
  },
  detailLabel: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  shareButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: width * 0.8,
    alignItems: 'center',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: 'white',
    width: width * 0.8,
  },
  homeButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
