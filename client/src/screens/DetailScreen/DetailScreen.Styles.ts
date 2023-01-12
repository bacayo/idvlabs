import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';
import { space } from '../../infrastructure/theme/spacing';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.primary,
  },
  image: {
    height: height / 4,
    resizeMode: 'contain',
  },
  productWrapper: {
    flex: 1,
  },
  productInfoWrapper: {
    padding: space[1],
    marginTop: space[2],
  },
  itemStockWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: Dimensions.get('screen').width / 2,
    alignSelf: 'center',
  },
});
