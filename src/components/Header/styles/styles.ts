import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: colors.label,
    fontSize: 30,
    fontWeight: 'bold',
  },
  avatarView: {
    height: 55,
    width: 55,
    overflow: 'hidden',
    marginVertical: 5,
    marginRight: 10,
  },
  avatar: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButton: {
    marginRight: 10,
  },
});
