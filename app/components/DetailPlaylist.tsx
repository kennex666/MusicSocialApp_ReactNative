import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { scale, verticalScale } from "../utils/Scale";
import { ButtonImageSizeContants } from "../constants/font-size";
import Text from "./CText";
import { COLORS } from "../constants/color";
import Stack from './Stack';


export default function DetailPlaylist({
  radius = 0,
  title = "",
  description = "",
  image = "https://placeholder.com/150x150",
  icon = null,
  onPress = () => {},
}) {
  return (
    <Stack
      style={styles.container}
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      width={"100%"}
      columnGap={scale(10)}
      onPress={onPress}
    >
      <Image
        source={typeof image === "string" ? { uri: image } : image}
        style={{
          width: verticalScale(50),
          height: verticalScale(50),
        }}
        borderRadius={radius}
        resizeMode="contain"
      />

      <Stack flexDirection="row" justifyContent="center">
        <Stack
          justifyContent="center"
          rowGap={5}
          style={{
            paddingBottom: verticalScale(3),
          }}
        >
          <Text value={title} />

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            columnGap={scale(2)}
          >
            {icon && (
              <Image
                source={icon}
                style={{
                  width: verticalScale(10),
                  height: verticalScale(10),
                }}
                resizeMode="contain"
              />
            )}
            <Text value={description} size="sm" color={COLORS.tertiary.text} />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: scale(5),
      paddingVertical: verticalScale(5),
    }
})