import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { colors } from '../theme/theme';

const CustomButton = ({ 
  title, 
  onPress, 
  style, 
  textStyle, 
  icon,
}) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        style, 
      ]} 
      onPress={onPress}
    >
      {icon && icon}
      <Text style={[styles.text, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
