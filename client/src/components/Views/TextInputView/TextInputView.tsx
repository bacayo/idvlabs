import { KeyboardTypeOptions, TextInput } from 'react-native';
import React from 'react';

import { colors } from '../../../infrastructure/theme/colors';

import styles from './TextInputView.Styles';

type Props = {
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder: string | undefined;
  value: string | undefined;
  onChangeText: ((text: string) => void) | undefined;
};

const TextInputView = ({
  keyboardType,
  placeholder,
  value,
  onChangeText,
}: Props) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={colors.text.primary}
    />
  );
};

export default TextInputView;
