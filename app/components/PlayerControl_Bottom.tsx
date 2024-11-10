import { Platform, StyleSheet, View } from "react-native"
import { scale, verticalScale } from "../utils/Scale"
import CText from "./CText"
import ImageButton from "./ImageButton"
import { IMAGE_RESOURCE } from "../constants/image_resource"
import { ButtonImageSizeContants, FontSizeConstants } from "../constants/font-size"
import { COLORS } from "../constants/color"
import TextTicker from "react-native-text-ticker"
import Slider from "@react-native-community/slider"
import { vw } from "../utils/ViewpointEmulator"

export const PlayerControl_Bottom = () => {
    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View>
            <ImageButton
              image={IMAGE_RESOURCE.static.album}
              size={ButtonImageSizeContants.xxl}
            />
          </View>

          <View style={styles.musicInfo}>
            {/* Music name */}
            <TextTicker
              style={{
                fontSize: FontSizeConstants.nm,
                color: COLORS.primary.text,
                paddingLeft: scale(5),
              }}
              duration={10000} // Thời gian cuộn hoàn thành
              loop
              bounce={false}
              repeatSpacer={50}
              marqueeDelay={1000}
            >
              Music name
            </TextTicker>

            {/* Device connection */}
            <View style={styles.deviceConnect}>
              <ImageButton
                image={IMAGE_RESOURCE.icon.connection.bluetooth}
                size={ButtonImageSizeContants.sm}
                firstState={true}
                disabled={true}
              />
              <CText
                style={styles.deviceConnectedText}
                size={FontSizeConstants.nm}
              >
                Test
              </CText>
            </View>
          </View>

          {/* Control media */}
          <View style={styles.mediaControlContainer}>
            <ImageButton
              image={IMAGE_RESOURCE.icon.connection.bluetooth}
              size={ButtonImageSizeContants.xlg}
              firstState={true}
            />

            <ImageButton
              image={IMAGE_RESOURCE.player.playNocircle}
              size={ButtonImageSizeContants.nm}
              firstState={true}
            />
          </View>
        </View>

        <View style={styles.secondaryContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={50}
            onSlidingComplete={() => {}}
            minimumTrackTintColor="#fff"
            maximumTrackTintColor="#777777"
            thumbTintColor="#fff" // transparent
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  secondaryContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  slider: {
    width: vw(93),
    height: verticalScale(30),
    marginHorizontal: Platform.select({ ios: 0, android: -10 }),
  },
  musicInfo: {
    flex: 1, // Để view thứ 2 chiếm toàn bộ không gian còn lại
    paddingHorizontal: scale(5),
  },
  mediaControlContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: scale(5),
    alignItems: "center",
  },
  deviceConnect: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: scale(2),
  },
  deviceConnectText: {
    color: COLORS.primary.text,
  },
  deviceConnectedText: {
    color: COLORS.secondary.text,
    // make it always capitalize
    textTransform: "uppercase",
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: scale(5),
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    paddingVertical: verticalScale(2),
    rowGap: verticalScale(2),
    paddingHorizontal: scale(15),
  },
});