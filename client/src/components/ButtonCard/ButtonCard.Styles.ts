import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { space } from '../../infrastructure/theme/spacing';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.ui.primary,
    padding: space[1],
    borderRadius: sizes[0],
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: sizes[1],
    color: colors.text.inverse,
    padding: space[1],
  },
  buttonDanger: {
    backgroundColor: colors.ui.error,
  },
});
