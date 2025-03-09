import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Input from './components/Input';
import {pastelColors} from './constants/colors';
import ColorPicker from './components/ColorPicker';

import normalize from './utils/normalizeText';
import useGrid from './hooks/useGrid';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {DndProvider, Draggable, DraggableGrid} from '@mgcrea/react-native-dnd';
import {WindowWidth} from './utils/device';

const Main = () => {
  const {
    size,
    setSize,
    gridData,
    gap,
    setGap,
    color,
    setColor,
    handleReset,
    depreciation,
  } = useGrid();
  return (
    <GestureHandlerRootView>
      <View style={styles.wrapper}>
        <SafeAreaView />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Input
              value={size}
              onChangeText={setSize}
              title={'Grid Size'}
              wrapperStyle={{marginRight: 12}}
              keyboardType="number-pad"
              maxLength={1}
              numberOfLines={1}
            />
            <Input
              value={gap}
              onChangeText={setGap}
              title={'Grid Gap'}
              keyboardType="number-pad"
              maxLength={2}
              numberOfLines={1}
            />
          </View>
          <ColorPicker
            title="Color Picker"
            data={pastelColors}
            onPress={setColor}
            value={color}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btn_reset} onPress={handleReset}>
              <Text style={{fontSize: normalize(16), color: '#0072ab'}}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          {Number(size) === 0 ? (
            <Text style={{fontSize: normalize(12)}}>
              Grid size must be greater than 0
            </Text>
          ) : (
            <DndProvider>
              <DraggableGrid
                direction="row"
                size={Number(size)}
                gap={isNaN(Number(gap)) ? 0 : Number(gap)}
                style={styles.grid}>
                {gridData.map(item => (
                  <Draggable
                    key={item.id}
                    id={item.id}
                    style={[
                      styles.draggable,
                      {
                        backgroundColor: color.color,
                        width: (WindowWidth - 32) / Number(size) - depreciation,
                        height:
                          (WindowWidth - 32) / Number(size) - depreciation,
                      },
                    ]}
                  />
                ))}
              </DraggableGrid>
            </DndProvider>
          )}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default Main;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 32,
  },
  btn_reset: {
    marginTop: 16,
    marginBottom: 20,
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderColor: '#A9A9AC',
  },
  grid: {},
  draggable: {
    borderRadius: 12,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
});
