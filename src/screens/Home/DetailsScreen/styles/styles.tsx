import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    fontSize: 28,
    color: colors.label,
    fontWeight: '500',
  },
  topContainer: {
    marginBottom: 10,
  },
  faviorateRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingText: {
    fontSize: 16,
    color: '#f5c518',
    fontWeight: '600',
  },
  releaseDateText: {
    fontSize: 15,
    color: colors.label,
    fontWeight: '400',
    marginLeft: 6,
  },
  midContainer: {
    flexDirection: 'row',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 0,
    marginBottom: 16,
  },

  poster: {
    width: 100,
    height: 150,
    borderRadius: 4,
    resizeMode: 'cover',
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },

  description: {
    color: colors.label,
    fontSize: 14,
    lineHeight: 20,
  },
});
