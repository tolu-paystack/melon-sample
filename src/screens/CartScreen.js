import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Checkbox, Divider } from "react-native-paper";
import { colors } from "../theme/theme";
import CartItem from "../components/CartItem";
import WarningNotice from "../components/WarningNotice";
import CustomButton from "../components/CustomButton";

const CartScreen = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headerTitle}>Your shopping cart</Text>

        {/* Add SIM button */}
        <View style={styles.addSimContainer}>
          <View style={styles.addSimWrapper}>
            <Text style={styles.plusIcon}>+</Text>
            <Text style={styles.addSimText}>Add SIM</Text>
          </View>
        </View>

        {/* Cart item */}
        <CartItem title="1 Line" price="R199.00" onPressDetails={() => {}} />

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
      </ScrollView>

      {/* Bottom container with buttons */}
      <View style={styles.buttonContainer}>
        {/* Refer a friend */}
        <TouchableOpacity style={styles.referContainer}>
          <Text style={styles.referText}>Click for Refer a Friend/Promo Code</Text>
        </TouchableOpacity>
        
        {/* Continue button */}
        <CustomButton 
          title="Continue" 
          onPress={() => {
            console.log('Navigating to Checkout');
            navigation.navigate('Checkout');
          }}
          style={styles.greenButton}
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
    fontWeight: "bold",
    marginBottom: 16,
    color: colors.text,
  },
  addSimContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
  },
  addSimWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  addSimText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 4,
  },
  plusIcon: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    marginVertical: 16,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.price,
  },
  recurringContainer: {
    backgroundColor: "#EEEEEE",
    borderRadius: 4,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    alignSelf: "flex-start",
  },
  recurringLabel: {
    color: colors.lightText,
    marginRight: 8,
  },
  recurringPrice: {
    color: colors.price,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  referContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    width: '100%',
  },
  referText: {
    color: colors.primary,
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: colors.secondary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'column',
    gap: 16,
  },
  greenButton: {
    backgroundColor: colors.primary,
    width: "100%",
  },
  continueButton: {
    backgroundColor: "#CCCCCC", // Gray button as shown in screenshot
    width: "100%",
  },
  continueButtonText: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default CartScreen;
