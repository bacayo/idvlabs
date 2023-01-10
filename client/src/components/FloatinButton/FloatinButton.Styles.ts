import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';

export default StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: colors.ui.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 50,
    backgroundColor: colors.ui.quaternary,
    borderRadius: 100,
  },
});
