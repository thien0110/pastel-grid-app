import {StyleSheet, type TextStyle} from 'react-native';
import normalize from '../../utils/normalizeText';
interface Style {
  textInput: TextStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    textInput: {
      borderRadius: 16,
      backgroundColor: '#FFF',
      borderWidth: 1,
      borderColor: '#A9A9AC',
      paddingHorizontal: 16,
      paddingVertical: 12,
      height: 48,
      fontSize: normalize(14)
    },
  });
};
