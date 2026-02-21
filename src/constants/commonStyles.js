import { StyleSheet } from 'react-native';
import { colors } from '../constants';

export default StyleSheet.create({
  errorText: {
    color: colors.disabled,
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
