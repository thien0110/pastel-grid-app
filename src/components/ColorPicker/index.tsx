import React, {memo, useRef} from 'react';
import {
  ScrollView,
  ScrollViewProps,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import createStyles from './index.style';
import {IPastelColor} from '../../constants/colors';
import normalize from '../../utils/normalizeText';
import {moderateScale} from '../../utils/device';

const styles = createStyles();
interface IColorPickerProps extends ScrollViewProps {
  title?: string;
  wrapperStyle?: ViewStyle;
  data: IPastelColor[];
  onPress: (value: IPastelColor) => void;
  value: IPastelColor;
}
const ColorPicker: React.FC<IColorPickerProps> = ({title, ...props}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <View style={[props.wrapperStyle]}>
      <Text style={{marginTop: 16, marginBottom: 8, fontSize: normalize(14)}}>
        {title}
      </Text>
      <ScrollView
        {...props}
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {props.data?.map((item, index) => {
          const isActive = props.value.name === item.name;
          return (
            <TouchableOpacity
              onPress={() => {
                props.onPress?.(item);
                scrollViewRef.current?.scrollTo({
                  x: moderateScale(116) * (index - 1),
                  animated: true,
                });
              }}
              key={index}
              style={[
                styles.item_btn,
                {backgroundColor: item.color},
                isActive && styles.item_btn_active,
                isActive && {borderColor: item.color},
              ]}>
              <Text
                style={{
                  color: isActive ? item.color : '#000',
                  fontSize: normalize(12),
                }}>
                {isActive ? '✓' : item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

ColorPicker.displayName = 'ColorPicker';

export default memo(ColorPicker);
