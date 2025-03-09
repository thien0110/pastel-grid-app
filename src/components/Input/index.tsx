import React, {memo} from 'react';
import {Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';
import createStyles from './index.style';
import normalize from '../../utils/normalizeText';

const styles = createStyles();
interface IInputWrapperProps extends TextInputProps {
  title?: string;
  wrapperStyle?: ViewStyle;
}
const Input: React.FC<IInputWrapperProps> = ({title, ...props}) => {
  return (
    <View style={[{flex: 1}, props.wrapperStyle]}>
      <Text style={{marginTop: 16, marginBottom: 8, fontSize: normalize(14)}}>{title}</Text>
      <TextInput {...props} style={[styles.textInput, props.style]} />
    </View>
  );
};

Input.displayName = 'Input';

export default memo(Input);
