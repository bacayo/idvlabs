import { Text } from 'react-native';
import React from 'react';

import styles from './TextView.Styles';

type Props = {
  text: string | number;
};

const TextView = ({ text }: Props) => {
  const numberOfLines = 1;

  return (
    <Text numberOfLines={numberOfLines} style={styles.text}>
      {text}
    </Text>
  );
};

export default TextView;
