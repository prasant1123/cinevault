import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  modalView: {
    margin: 10,
    backgroundColor: colors.text,
    borderRadius: 20,
    padding: 45,
    alignItems: 'center',
    shadowColor: colors.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 70,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: colors.secondary,
  },

  textStyle: {
    color: colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
