// @flow
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type Props = {
  disabled?: boolean,
  label: string,
  onPress: Function,
};

function Button({ disabled = false, label, onPress }: Props): React.Element<*> {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      disabled={disabled}
      onPress={onPress}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

export default Button;
