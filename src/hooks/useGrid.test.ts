import { renderHook, act } from '@testing-library/react-hooks';
import useGrid from './useGrid';

describe('useGrid', () => {
  it('calculates depreciation correctly', () => {
    const { result } = renderHook(() => useGrid());

    // Test case 1: size = 3, gap = 10
    act(() => {
      result.current.setSize('3');
      result.current.setGap('10');
    });
    expect(result.current.depreciation).toBe(7); // ((3-1) * 10) / 3 = 6.67 => Math.ceil(6.67) = 7

    // Test case 2: size = 5, gap = 0
    act(() => {
      result.current.setSize('5');
      result.current.setGap('0');
    });
    expect(result.current.depreciation).toBe(0); // ((5-1) * 0) / 5 = 0

    // Test case 3: size = 4, gap = NaN
    act(() => {
      result.current.setSize('4');
      result.current.setGap('NaN');
    });
    expect(result.current.depreciation).toBe(0); // ((4-1) * 0) / 4 = 0 => Math.ceil(0) = 0
  });
});