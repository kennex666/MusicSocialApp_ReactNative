import Slider from "@react-native-community/slider";
import Stack from "./Stack";
import { Platform, StyleSheet } from "react-native";
import { vw } from "../utils/ViewpointEmulator";
import { scale, verticalScale } from "../utils/Scale";
import Text from "./CText";
import { COLORS } from "../constants/color";

interface MusicSliderProps {
    isShowTimeBar?: boolean;
    style?: any;
}

export default function MusicSlider({ isShowTimeBar = false, style }: MusicSliderProps) {
  return (
    <Stack
      flexDirection="column"
      width={vw(93)}
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
    >
      <Slider
        style={style ? style : styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={50}
        onSlidingComplete={() => {}}
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
            0:19
          </Text>
          <Text size="sm" color={COLORS.tertiary.text}>
            19:03
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