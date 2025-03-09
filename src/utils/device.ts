import {Platform, Dimensions} from 'react-native';

// ? Screen Constants
const Screen = Dimensions.get('screen');
const ScreenWidth: number = Screen.width;
const ScreenHeight: number = Screen.height;
const ScreenScale: number = Screen.scale;
const ScreenFontScale: number = Screen.fontScale;
// ? Window Constants
const Window = Dimensions.get('window');
const WindowWidth: number = Window.width;
const WindowHeight: number = Window.height;
const WindowFontScale: number = Window.fontScale;
const WindowScale: number = Window.scale;
const isIOS: boolean = Platform.OS === 'ios';
const isAndroid: boolean = Platform.OS === 'android';
const PlatformVersion = Platform.Version;

/**
 * @description
 * These are the dynamic calculation for the app is on the landscape or portrait mode.
 */
const ScreenMin = Math.min(WindowWidth, WindowHeight) || WindowHeight;
const ScreenMax = Math.max(WindowWidth, WindowHeight) || WindowWidth;

const guidelineBaseWidth = 350;
const scale = (size: number) => (ScreenMin / guidelineBaseWidth) * size;

const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
/**
 * @description
 * These are the viewport units for the web or mobile web who wants to use viewport units.
 */
const vh = WindowHeight / 100;
const vw = WindowWidth / 100;
const vmin = Math.min(vh, vw) || vh;
const vmax = Math.max(vh, vw) || vw;

/**
 * Determines if the current device is a tablet.
 * Uses a singleton approach to avoid re-evaluating each time.
 */
const determineIsTablet = (): boolean => {
  const {width, height} = Dimensions.get('screen');
  const minDimension = Math.min(width, height);
  const maxDimension = Math.max(width, height);

  const aspectRatio = maxDimension / minDimension;
  const minTabletWidth = 600; // dp
  const maxPhoneAspectRatio = 1.6; // Typical phone aspect ratio

  return (
    (isAndroid || isIOS) &&
    (minDimension >= minTabletWidth || aspectRatio <= maxPhoneAspectRatio)
  );
};

// Singleton value to prevent recalculating multiple times
const isTablet: boolean = determineIsTablet();

export {
  vh,
  vw,
  vmin,
  vmax,
  ScreenMin,
  ScreenMax,
  isIOS,
  isAndroid,
  ScreenWidth,
  ScreenHeight,
  ScreenScale,
  ScreenFontScale,
  WindowWidth,
  WindowHeight,
  WindowScale,
  WindowFontScale,
  PlatformVersion,
  isTablet,
  moderateScale
};
