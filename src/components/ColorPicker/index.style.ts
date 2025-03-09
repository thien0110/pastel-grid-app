import {StyleSheet, type ViewStyle} from 'react-native';
import normalize from '../../utils/normalizeText';
import { moderateScale } from '../../utils/device';
interface Style {
  item_btn: ViewStyle;
  item_btn_active: ViewStyle;
}
export default () => {
  return StyleSheet.create<Style>({
    item_btn: {
      width: moderateScale(116),
      paddingVertical: normalize(8),
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 12,
    },
    item_btn_active: {
      width: moderateScale(115),
      paddingVertical: normalize(7),
      borderWidth: 1,
      borderColor: '#A9A9AC',
      backgroundColor: '#FFFFFF',
    },
  });
};
