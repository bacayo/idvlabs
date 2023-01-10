import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../infrastructure/theme/colors';
import { sizes } from '../../infrastructure/theme/sizes';
import { space } from '../../infrastructure/theme/spacing';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.brand.muted,
    margin: space[1],
    padding: 4,
    borderRadius: sizes[0],
  },
  image: {
    flex: 1,
    height: height / 3,
    resizeMode: 'contain',
    borderRadius: sizes[1] / 2,
  },
});
