import { StyleSheet } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import { sizes } from '../../../infrastructure/theme/sizes';
import { space } from '../../../infrastructure/theme/spacing';

export default StyleSheet.create({
  text: {
    fontSize: sizes[1],
    padding: space[1],
    color: colors.text.primary,
    fontWeight: '400',
  },
});
