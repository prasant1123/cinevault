import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native';
import styles from './styles/LongButtonStyles';
import { colors } from '../../constants';

type longButtonProps = {
  title: string;
  onPress: () => void;
  isDisabled?: boolean;
  loading?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function LongButton({
  title,
  onPress,
  isDisabled = false,
  loading = false,
  borderColor = '#0000',
  backgroundColor = colors.primary,
  textColor = '#0000',
  style,
  textStyle,
}: longButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.button,
        {
          backgroundColor: isDisabled ? colors.disabled : backgroundColor,
          borderColor: borderColor,
          borderWidth: 0.5,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }, textStyle]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
