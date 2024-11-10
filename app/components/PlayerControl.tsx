import { StyleSheet, View } from "react-native";
import CText from "./CText";
import {
  ButtonImageSizeContants,
  FontSizeConstants,
} from "../constants/font-size";
import { vh, vw } from "../utils/ViewpointEmulator";
import ImageButton from "./ImageButton";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { verticalScale } from "../utils/Scale";

export default function PlayerControlComponent({ handlers }: any): JSX.Element {
  handlers = {
    onShuffle: ({ active, setActive }: any) => {
      console.log("Shuffle button pressed");
    },
    onSkipForward: ({ active, setActive }: any) => {
      console.log("Skip Forward button pressed");
    },
    onPlay: ({ active, setActive }: any) => {
      console.log("Play button pressed");
    },
    onSkipBack: ({ active, setActive }: any) => {
      console.log("Skip Back button pressed");
    },
    onRepeat: ({ active, setActive }: any) => {
      console.log("Repeat button pressed");
    },
  };

  return (
    <View style={styles.container}>
      <ImageButton
        image={IMAGE_RESOURCE.player.shuffle}
        size={ButtonImageSizeContants.md}
        isControllActive={false}
        onPress={handlers.onShuffle}
      />

      <ImageButton
        image={IMAGE_RESOURCE.player.skipForward}
        size={ButtonImageSizeContants.md}
        isControllActive={false}
        onPress={handlers.onSkipForward}
      />

      <ImageButton
        image={IMAGE_RESOURCE.player.play}
        size={ButtonImageSizeContants.xxl}
        isControllActive={false}
        onPress={handlers.onPlay}
      />

      <ImageButton
        image={IMAGE_RESOURCE.player.skipBack}
        size={ButtonImageSizeContants.md}
        isControllActive={false}
        onPress={handlers.onSkipBack}
      />

      <ImageButton
        image={IMAGE_RESOURCE.player.repeat}
        size={ButtonImageSizeContants.md}
        isControllActive={false}
        onPress={handlers.onRepeat}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: vw(4.3),
    width: vw(100),
    paddingVertical: verticalScale(6),
  },
});
