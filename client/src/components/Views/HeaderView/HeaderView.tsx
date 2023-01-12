import { Text } from 'react-native';
import React from 'react';

import styles from './HeaderView.Styles';

type Props = {
  text: string;
};

const HeaderView = ({ text }: Props) => {
  return <Text style={styles.header}>{text}</Text>;
};

export default HeaderView;
