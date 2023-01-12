import { GestureResponderEvent, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

import styles from './FloatinButton.Styles';
import { colors } from '../../infrastructure/theme/colors';

type Props = {
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

const FloatingButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Icon name="plus" size={30} color={colors.ui.primary} />
    </Pressable>
  );
};

export default FloatingButton;
