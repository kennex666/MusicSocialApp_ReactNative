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
import MusicSlider from "./MusicSlider"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { stopMusic } from "../redux/musicSlice"
import { useSound } from "../redux/SoundContext"

export const PlayerControl_Bottom = () => {
    const dispatch = useDispatch();
    const { music } = useSelector((state) => state.music);

    const {
      playSound,
      pauseSound,
      resumeSound,
      stopSound,
      isPlaying,
      duration,
      position,
      soundInfo,
      metadata
    } = useSound();

    useEffect(() => {
      // console.log(position/1000, duration/1000)
    }, [isPlaying, music, position]);


    return (
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View>
            <ImageButton
              image={metadata?.image ?? IMAGE_RESOURCE.static.album}
              size={ButtonImageSizeContants.lg}
            />
          </View>

          <View style={styles.musicInfo}>
            {/* Music name */}
            <TextTicker
              style={{
                fontSize: FontSizeConstants.sm,
                color: COLORS.primary.text,
                paddingLeft: scale(5),
              }}
              duration={10000} // Thời gian cuộn hoàn thành
              loop
              bounce={false}
              repeatSpacer={50}
              marqueeDelay={1000}
            >
              {metadata?.title}
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
                size="sm"
                value="Not connected"
                color={COLORS.secondary.text}
              />
            </View>
          </View>

          {/* Control media */}
          <View style={styles.mediaControlContainer}>
            <ImageButton
              image={IMAGE_RESOURCE.icon.connection.bluetooth}
              size={ButtonImageSizeContants.md}
              firstState={true}
            />

            <ImageButton
              image={IMAGE_RESOURCE.player.playNocircle}
              size={ButtonImageSizeContants.xs}
              firstState={isPlaying}
              activeState={isPlaying}
              onPress={() => {
                if (isPlaying) {
                  pauseSound();
                } else {
                  resumeSound();
                }
              }}
            />
          </View>
        </View>

        <View style={styles.secondaryContainer}>
          <MusicSlider
            style={styles.slider}
            progressDuration={position / 1000}
            maxDuration={duration / 1000}
            isShowTimeBar={true}
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
    // make it always capitalize
    textTransform: "uppercase",
  },
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    width: "100%",
  },
});