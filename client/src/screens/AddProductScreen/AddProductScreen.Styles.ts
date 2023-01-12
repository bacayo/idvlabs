import { StyleSheet } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { space } from '../../infrastructure/theme/spacing';

export default StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },
  inputWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    marginBottom: space[2],
    justifyContent: 'flex-end',
    width: '70%',
    alignSelf: 'center',
  },
});
