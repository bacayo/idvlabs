import { StyleSheet } from 'react-native';
import { colors } from '../../../infrastructure/theme/colors';
import { sizes } from '../../../infrastructure/theme/sizes';
import { space } from '../../../infrastructure/theme/spacing';

export default StyleSheet.create({
  header: {
    fontSize: sizes[2] / 1.5,
    color: colors.text.primary,
    fontWeight: 'bold',
    padding: space[2],
  },
});
