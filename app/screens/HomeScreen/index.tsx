import { Alert, FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import CText from "../../components/CText";
import { ButtonImageSizeContants, FontSizeConstants } from "../../constants/font-size";
import { vh, vw } from "../../utils/ViewpointEmulator";
import { COLORS } from "../../constants/color";
import Stack from "../../components/Stack";
import Text from "../../components/CText";
import ImageButton from "../../components/ImageButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { scale, verticalScale } from "../../utils/Scale";
import TitleAndImage from "../../components/TitleAndImage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { playMusicURL } from "../../services/player";
import { playMusic } from "../../redux/musicSlice";
import { PlayerControl_Bottom } from '../../components/PlayerControl_Bottom';
import PlayerControlComponent from "../../components/PlayerControl";
import { useSound } from "../../redux/SoundContext";
import { API_DOMAIN, API_PATH } from "../../constants/api_url";
import { SCREEN_NAME } from "../../constants/screen";

const madeForYou = [
  {
    id: 1,
    name: "Son tung MTP and 7UPPERCUTS - Hãy trao cho anh",
    image: "https://placeholder.com/150x150",
  },
  {
    id: 2,
    name: "Album 2",
    image: "https://placeholder.com/150x150",
  },
  {
    id: 3,
    name: "Album 3",
    image: "https://placeholder.com/150x150",
  },
  {
    id: 4,
    name: "Album 4",
    image: "https://placeholder.com/150x150",
  },
]

export default function HomeScreen({ navigation }): JSX.Element {
  const dispatch = useDispatch();
  const { music } = useSelector((state) => state.music);
  const [topChart, setTopChart] = useState([]);
  const [topChartSong, setTopChartSong] = useState([]);
  const [topRadio, setTopRadio] = useState([]);
  const {
    playSound,
    pauseSound,
    resumeSound,
    stopSound,
    isPlaying,
    duration,
    position,
    soundInfo,
    metadata,
    setList,
    setMetadata,
  } = useSound();

  const user = {
    name: "Bảo",
    image: "https://placeholder.com/50x50",
  };
  useEffect(() => {
    console.log("fetching top chart");
    fetch(API_DOMAIN.musicService + API_PATH.playlist.top_chart)
      .then((res) => res.json())
      .then((res) => {
        setTopChart(res.data);
      });
  }, []);

  useEffect(() => {
    console.log("fetching top song");
    fetch(API_DOMAIN.musicService + API_PATH.playlist.top_chart_song)
      .then((res) => res.json())
      .then((res) => {
        setTopChartSong(res.data);
      });
  }, []);

  useEffect(() => {
    console.log("fetching top radio");
    fetch(API_DOMAIN.musicService + API_PATH.playlist.popular_radio)
      .then((res) => res.json())
      .then((res) => {
        setTopRadio(res.data);
      });
  }, []);

  const handleOnPress = async (data: any) => {
     console.log(data);
              if (data.type == "song") {
                fetch(API_DOMAIN.musicService + API_PATH.song.detail + data.key)
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    if (!res.data.url) {
                      Alert.alert(
                        "Error",
                        "API phản hồi: 503 - Vui lòng request chậm lại!"
                      );
                          playSound("https://dtbao.io.vn/audio/imhiding.mp3");
                    } else playSound(res.data.url);
                    
                    setMetadata({
                      title: data.name,
                      artist: data.artist,
                      image: data.image,
                    });
                  })
                  .catch((err) => {
                    Alert.alert(
                      "Error",
                      "API phản hồi: 503 - Vui lòng request chậm lại!"
                    );
                          playSound("https://dtbao.io.vn/audio/imhiding.mp3");
                    console.log(err);
                  });
              } else {
                if (data.type == "album") {
                  // Ở màn hình trước, chuyển qua
                    navigation.navigate(SCREEN_NAME.AlbumScreen, {
                      data: data,
                    });
                }
              }
            }

  return (
    <Stack style={styles.container}>
      <ScrollView>
        <Stack
          justifyContent="space-between"
          flexDirection="row"
          style={{
            marginBottom: verticalScale(15),
          }}
        >
          <Stack flexDirection="row" columnGap={scale(10)} alignItems="center">
            <ImageButton
              image={
                user && user?.image
                  ? user?.image
                  : "https://placeholder.com/50x50"
              }
              size={ButtonImageSizeContants.lg}
              radius={9999}
            />
            <Text
              value={`Hi, ${user & user?.name ? user?.name : "Bảo"}!`}
              size="xl"
              bold
            />
          </Stack>
        </Stack>

        <Stack rowGap={verticalScale(30)}>
          {/* Recently play */}
          <TitleAndImage
            title="Made for you"
            data={topChartSong}
            onPress={handleOnPress}
          />

          <TitleAndImage
            title="Popular radio"
            data={topRadio}
            onPress={handleOnPress}
          />

          <TitleAndImage
            title="Your show"
            data={madeForYou}
            onPress={handleOnPress}
          />

          <TitleAndImage
            title="Top chart"
            data={topChart}
            onPress={handleOnPress}
          />
        </Stack>
      </ScrollView>

      {metadata?.title && (
        <Stack
          style={{
            position: "absolute",
            bottom: 0,
            height: 100,
            backgroundColor: COLORS.primary.background,
            paddingHorizontal: vw(5),
            paddingTop: verticalScale(10),
          }}
        >
          <PlayerControl_Bottom />
        </Stack>
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary.background,
    padding: vw(5),
  },

  imageButtonAvt: {
    borderRadius: vw(90)
  }
});