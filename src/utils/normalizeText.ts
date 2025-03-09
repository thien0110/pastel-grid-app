import { Platform, StatusBar, Dimensions } from "react-native";

// guideline height for standard 5" device screen is 680
export default function normalize(fontSize:number, standardScreenHeight = 680) {
  const { height, width } = Dimensions.get("window");
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
     Platform.OS === "android"
      ? standardLength - Number(offset)
      : standardLength;

  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}