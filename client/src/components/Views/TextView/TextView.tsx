import { Text } from 'react-native';
import React from 'react';

import styles from './TextView.Styles';

type Props = {
  text: string;
  extraText?: string;
};

const TextView = ({ text, extraText }: Props) => {
  const numberOfLines = 1;

  return (
    <Text numberOfLines={numberOfLines} style={styles.text}>
      {text} {extraText}
    </Text>
  );
};

export default TextView;
