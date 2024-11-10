import Slider from "@react-native-community/slider";
import Stack from "./Stack";
import { Image, Platform, StyleSheet } from "react-native";
import { vw } from "../utils/ViewpointEmulator";
import { scale, verticalScale } from "../utils/Scale";
import Text from "./CText";
import { COLORS } from "../constants/color";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import ImageButton from "./ImageButton";
import { ButtonImageSizeContants } from "../constants/font-size";

interface VolunmSliderProps {
  style?: any;
}

export default function VolunmSlider() {
  return (
    <Stack
      flexDirection="row"
      width={vw(93)}
      justifyContent="center"
      alignItems="center"
      alignSelf="center"
      columnGap={scale(10)}
    >
    <ImageButton image={IMAGE_RESOURCE.player.speaker} size={ButtonImageSizeContants.sm} style={
        {
            marginLeft: scale(10),
        }
    }/>
      <Slider
        style={ styles.slider }
        minimumValue={0}
        maximumValue={100}
        value={50}
        onSlidingComplete={() => {}}
        minimumTrackTintColor={COLORS.secondary.text}
        maximumTrackTintColor="#777777"
        thumbTintColor="#fff" // transparent
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  slider: {
    height: verticalScale(10),
    marginHorizontal: Platform.select({ ios: 0, android: -10 }),
    width: vw(93) - ButtonImageSizeContants.sm - scale(20),
  },
});
