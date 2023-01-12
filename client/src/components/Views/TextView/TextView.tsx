import { Text } from 'react-native';
import React from 'react';

import styles from './TextView.Styles';

type Props = {
  text: string | number;
  numberOfLines?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
};

const TextView = ({ text, numberOfLines, fontWeight }: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, { fontWeight: fontWeight }]}>
      {text}
    </Text>
  );
};

export default TextView;
