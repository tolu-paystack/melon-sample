import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme/theme';

const CartItem = ({ 
  title, 
  price, 
  onPress, 
  onPressDetails,
  subtitle,
  showDetails = true,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          {showDetails && (
            <TouchableOpacity onPress={onPressDetails}>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsText}>More details</Text>
                <Text style={styles.chevron}>∨</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.lightText,
    marginBottom: 8,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    color: colors.lightText,
    fontSize: 14,
  },
  chevron: {
    color: colors.lightText,
    fontSize: 14,
    marginLeft: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.price,
  },
});

export default CartItem;
