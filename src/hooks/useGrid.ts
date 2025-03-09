import {useMemo, useState} from 'react';
import {IPastelColor, pastelColors} from '../constants/colors';
import {ObjectWithId} from '@mgcrea/react-native-dnd';
const useGrid = () => {
  const [gap, setGap] = useState('10');
  const [color, setColor] = useState<IPastelColor>(pastelColors[0]);
  const [size, setSize] = useState('3');
  const handleReset = () => {
    setSize('0');
    setTimeout(() => {
      setSize('3');
      setGap('10');
    }, 100);
    setColor(pastelColors[0]);
  };
  const depreciation = useMemo(() => {
    return Math.ceil(
      ((Number(size) - 1) * (isNaN(Number(gap)) ? 0 : Number(gap))) /
        Number(size),
    );
  }, [size, gap]);
  const gridData = useMemo(() => {
    return Array.from({length: Number(size) * Number(size)}, (_, i) => ({
      id: `${i}-${i + 1}`,
      value: `${i + 1}`,
    })) satisfies ObjectWithId[];
  }, [size]);
  return {
    size,
    setSize,
    gridData,
    gap,
    setGap,
    color,
    setColor,
    handleReset,
    depreciation,
  };
};
export default useGrid;
