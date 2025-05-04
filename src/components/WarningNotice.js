import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/theme';

const WarningNotice = ({ 
  message, 
  actionText,
  onAction,
  icon,
  style 
}) => {
  return (
    <View style={[styles.container, style]}>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
        {actionText && (
          <Text style={styles.actionText} onPress={onAction}>
            {actionText}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEBEE', // Light pink as in screenshot
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    flexDirection: 'row',
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  messageContainer: {
    flex: 1,
  },
  message: {
    fontSize: 14,
    color: colors.text,
  },
  actionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 8,
  },
});

export default WarningNotice;
