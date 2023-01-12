import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { space } from '../../infrastructure/theme/spacing';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: space[3],
  },
  modalView: {
    marginHorizontal: 40,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    backgroundColor: colors.bg.secondary,
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});
