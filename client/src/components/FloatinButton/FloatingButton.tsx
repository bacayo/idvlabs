import { TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './FloatinButton.Styles';
import { colors } from '../../infrastructure/theme/colors';

const FloatingButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Icon name="plus" size={30} color={colors.ui.primary} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
