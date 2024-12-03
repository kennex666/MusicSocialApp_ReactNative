import Slider from "@react-native-community/slider";
import Stack from "./Stack";
import { Platform, StyleSheet } from "react-native";
import { vw } from "../utils/ViewpointEmulator";
import { scale, verticalScale } from "../utils/Scale";
import Text from "./CText";
import { COLORS } from "../constants/color";
import { useSound } from "../redux/SoundContext";
import { useEffect } from "react";

interface MusicSliderProps {
  isShowTimeBar?: boolean;
  maxDuration?: number;
  style?: any;
  progressDuration?: number;
}

export default function MusicSlider({
  isShowTimeBar = false,
  style,
}: MusicSliderProps) {
  const {
    playSound,
    pauseSound,
    resumeSound,
    stopSound,
    isPlaying,
    duration,
    position,
    soundInfo,
    setPosition,
  } = useSound();

  return (
    <Stack
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
    >
      <Slider
        style={style ? style : styles.slider}
        minimumValue={0}
        maximumValue={duration / 1000}
        value={position / 1000}
        onSlidingComplete={(value) => {
          console.log("onSlidingComplete");
          setPosition(value * 1000);
        }}
        
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#777777"
        thumbTintColor="#fff" // transparent
      />
      {isShowTimeBar && (
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          style={{
            paddingHorizontal: scale(12),
          }}
        >
          <Text size="sm" color={COLORS.tertiary.text}>
            {position / 1000}
          </Text>
          <Text size="sm" color={COLORS.tertiary.text}>
            {duration / 1000}
          </Text>
        </Stack>
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  slider: {
    height: verticalScale(10),
    marginHorizontal: Platform.select({ ios: 0, android: -10 }),
    width: "100%",
  },
});