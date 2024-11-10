import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { scale, verticalScale } from "../utils/Scale";
import { ButtonImageSizeContants } from "../constants/font-size";
import Text from "./CText";
import { COLORS } from "../constants/color";
import Stack from './Stack';
import ImageButton from "./ImageButton";


export default function DetailSong(){
  const isPlaying = true;
    return (
      <Stack
        style={styles.container}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width={"100%"}
        columnGap={scale(8)}
      >
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignSelf="center"
        >
          <Stack justifyContent="center" rowGap={verticalScale(2)}>
            <Stack flexDirection="row" alignItems="center" columnGap={scale(5)}>
              <ImageButton
                image={IMAGE_RESOURCE.player.playing}
                size={ButtonImageSizeContants.xs}
              />
              <Text
                color={isPlaying ? COLORS.secondary.text : COLORS.primary.text}
                value="Do for love - B Ray"
              />
            </Stack>

            <Stack flexDirection="row" alignItems="center" columnGap={scale(5)}>
              <ImageButton
                image={IMAGE_RESOURCE.details.download}
                size={ButtonImageSizeContants.xs}
              />
              <Text
                color={COLORS.tertiary.text}
                value="Loser to lover"
                size="sm"
              />
            </Stack>
          </Stack>
        </Stack>

        <ImageButton
          image={IMAGE_RESOURCE.details.more}
          size={ButtonImageSizeContants.xs}
          firstState={true}
        />
      </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: scale(20),
      paddingVertical: verticalScale(2),
    }
})