import { StyleSheet } from 'react-native';

import { colors } from '../../../constants';

export default StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.background,
    paddingBottom: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.primary,
    // marginHorizontal: 25,
    paddingHorizontal: 10,
    overflow: 'hidden',
  },
  poster: {
    marginTop: 10,
    width: '40%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
});
