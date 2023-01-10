import { Text } from 'react-native';
import React from 'react';

import styles from './TextView.Styles';

type Props = {
  text: string;
  extraText?: string;
};

const TextView = ({ text, extraText }: Props) => {
  return (
    <Text numberOfLines={1} style={styles.text}>
      {text} {extraText}
    </Text>
  );
};

export default TextView;
