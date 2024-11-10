import { scaledFontSize, verticalScale } from "../utils/Scale";
import { Platform } from "react-native";

export const FontSizeConstants = {
  xxxs: (Platform.OS == 'web') ? scaledFontSize(6) : scaledFontSize(6),    // Extra extra extra small
  xs: scaledFontSize(8),     // Extra small
  sm: scaledFontSize(12),    // Small
  nm: scaledFontSize(16),    // Normal (medium)
  md: scaledFontSize(18),    // Medium
  lg: scaledFontSize(20),    // Large
  xlg: scaledFontSize(22),   // Extra large
  xl: scaledFontSize(25),    // Extra extra large
  xxl: scaledFontSize(27),   // Extra extra extra large
  xxxl: scaledFontSize(32),   // Extra extra extra extra large
};


export const ButtonImageSizeContants = {
  sm: verticalScale(15), // Small
  nm: verticalScale(18), // Normal (medium)
  md: verticalScale(20), // Medium
  lg: verticalScale(25), // Large
  xlg: verticalScale(27), // Extra large
  xl: verticalScale(32), // Extra extra large
  xxl: verticalScale(35), // Extra extra extra large
  xxxl: verticalScale(40), // Extra extra extra extra large
};