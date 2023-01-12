import { Text, Pressable, GestureResponderEvent } from 'react-native';
import React from 'react';

import styles from './ButtonCard.Styles';

type Props = {
  title: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  danger?: boolean;
};

const ButtonCard = ({ title, onPress, danger }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, danger ? styles.buttonDanger : styles.button]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default ButtonCard;
