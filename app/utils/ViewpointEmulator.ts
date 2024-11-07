// src/ViewportDimensions.tsx
import { Dimensions } from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// Convert percentages to viewport units
export const vw = (percentage: number) => (width * percentage) / 100;
export const vh = (percentage: number) => (height * percentage) / 100;
export const isPortrait = (height>width);

// Optionally, create a hook to automatically update dimensions
import { useWindowDimensions } from 'react-native';

export const useViewportDimensions = () => {
  const { width, height } = useWindowDimensions();
  const actualDimensions =  {
    height:  (height<width) ? width : height,
    width: (width>height) ? height : width
  };
  return {
    vw: (percentage: number) => {
      return (width * percentage) / 100;
    },
    vh: (percentage: number) => {
      return (height * percentage) / 100
    },
    getHeight: () => actualDimensions.height,
    getWidth: () => actualDimensions.width,
    getViewport: () => actualDimensions,
    orientationMode: (height>width) ? "portrait" : "landscape",
    isPortrait: (height>width),
    isLandscape: (height<width),
  };
};
