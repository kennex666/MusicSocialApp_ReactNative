import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Base dimensions for scaling
const baseWidth = 375;
const baseHeight = 667;

// Scaling factors
const scale = (size: number) => (width / baseWidth) * size;
const verticalScale = (size: number) => (height / baseHeight) * size;

// More conservative scaling with limits
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

const scaledFontSize = (size: number) => {
  const scaleFactor = 0.3; // More conservative factor for scaling
  const scaledSize = moderateScale(size, scaleFactor);
  // Limit to a reasonable max size to prevent excessively large text
  return Math.min(scaledSize, size * 1.25); // Maximum 1.25 times the base size
};

export { scale, verticalScale, moderateScale, scaledFontSize };
