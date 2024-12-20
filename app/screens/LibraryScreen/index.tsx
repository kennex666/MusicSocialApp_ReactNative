import { Alert, FlatList, Image, ScrollView, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import CText from "../../components/CText";
import { ButtonImageSizeContants, FontSizeConstants } from "../../constants/font-size";
import { vw } from "../../utils/ViewpointEmulator";
import { COLORS } from "../../constants/color";
import Stack from "../../components/Stack";
import Text from "../../components/CText";
import ImageButton from "../../components/ImageButton";
import { IMAGE_RESOURCE } from "../../constants/image_resource";
import { scale, verticalScale } from "../../utils/Scale";
import TitleAndImage from "../../components/TitleAndImage";
import DetailSong from "../../components/DetailSong";
import DetailSearch from "../../components/DetailSearch";
import DetailPlaylist from "../../components/DetailPlaylist";
import { useEffect, useState } from "react";
import { API_DOMAIN, API_PATH } from "../../constants/api_url";
import { useSound } from "../../redux/SoundContext";
import { SCREEN_NAME } from "../../constants/screen";

const listLibrary = [
  {
    id: 1, 
    name: "Playlist",
  },
  {
    id: 2,
    name: "Album",
  },
  {
    id: 3,
    name: "Artist",
  },
  {
    id: 4,
    name: "Podcast",
  },
]

const recentlyPlay = [
  {
    id: 3,
    title: "Your heavy rotation",
    description: "Playlist",
    image: IMAGE_RESOURCE.static.album,
    rounded: false,
  },
  {
    id: 4,
    title: "Artist",
    description: "Playlist",
    image: IMAGE_RESOURCE.static.art,
    rounded: true,
  },
  {
    id: 5,
    title: "Album",
    description: "Playlist",
    image: IMAGE_RESOURCE.static.album,
    rounded: true,
  },
  {
    id: 6,
    title: "Podcast",
    description: "Playlist",
    image: IMAGE_RESOURCE.static.art,
    rounded: true,
  },
  {
    id: 7,
    title: "Playlist",
    description: "Playlist",
    image: IMAGE_RESOURCE.static.art,
    rounded: true,
  }
];

export default function LibraryScreen({ navigation }): JSX.Element {
  const [savedList, setSavedList] = useState([] as any);

  const user = {
    name: "Bảo",
    image: "https://placeholder.com/50x50",
  };

  const listAlbumUser = [
    {
      id: "1",
      name: "Dữ Liệu Quý (EP)",
      artist: "Đen Vâu",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/c/1/6/8c166e2b9a0e45ca9a6c7bef40a81f74.jpg",
      url: "ZmJmykZgsGpNHddynyFnZmTLaVBDRHRRz",
    },
    {
      id: "2",
      name: "Dữ Liệu Quý (EP)",
      artist: "Đen Vâu",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/c/1/6/8c166e2b9a0e45ca9a6c7bef40a81f74.jpg",
      url: "ZmJmykZgsGpNHddynyFnZmTLaVBDRHRRz",
    },
  ];

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
    setMetadata,
  } = useSound();

  useEffect(() => {
    fetch(API_DOMAIN.musicService + "/api_getsaved.php?id=" + 1)
      .then((response) => response.json())
      .then((json) =>
        setSavedList([
          {
            id: 1,
            title: "Liked Songs",
            description: "Playlist",
            image: IMAGE_RESOURCE.static.love,
            icon: IMAGE_RESOURCE.button.pinned,
          },
          {
            id: 2,
            title: "New Episodes",
            description: "Updated 2 days ago",
            image: IMAGE_RESOURCE.static.new,
            icon: IMAGE_RESOURCE.button.pinned,
          },
          ...json.data.map((item: any) => ({
            id: item.id,
            title: item.name,
            description: item.artists[0].name,
            image: item.image,
            origin: item,
          })),
        ])
      )
      .catch((error) => console.error(error));
  }, []);
  return (
    <Stack style={styles.container}>
      <Stack
        justifyContent="space-between"
        flexDirection="row"
        style={{
          marginBottom: verticalScale(15),
        }}
      >
        <Stack flexDirection="row" columnGap={scale(10)} alignItems="center">
          <ImageButton
            image={user && user?.image ? user?.image : "https://placeholder.com/50x50"}
            size={ButtonImageSizeContants.lg}
            radius={9999}
          />
          <Text value="Your Library" size="xl" bold />
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <ImageButton
            image={IMAGE_RESOURCE.button.plus}
            size={ButtonImageSizeContants.md}
            radius={9999}
          />
        </Stack>
      </Stack>

      {/* I need a flash list with radius button - text */}
      <Stack>
        <FlatList
          data={listLibrary}
          renderItem={({ item }) => (
            <Stack
              style={{
                borderRadius: 9999,
                borderColor: "#7F7F7F",
                borderWidth: 1,
                paddingHorizontal: scale(15),
                paddingVertical: verticalScale(4),
                marginRight: verticalScale(10),
              }}
              flexDirection={"row"}
            >
              <CText value={item.name} size={"nm"} />
            </Stack>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          style={{
            marginBottom: verticalScale(15),
          }}
        />
      </Stack>

      <Stack
        flexDirection="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          onPress={() => {}}
          style={{
            paddingBottom: verticalScale(6),
          }}
        >
          <Image
            source={IMAGE_RESOURCE.button.twoarrow}
            style={{
              width: ButtonImageSizeContants.nm,
              height: ButtonImageSizeContants.nm,
            }}
            resizeMode="contain"
          />
          <Text value="Recently played" size="sm" bold />
        </Stack>
        <Stack>
          <ImageButton
            image={IMAGE_RESOURCE.button.window}
            size={ButtonImageSizeContants.sm}
          />
        </Stack>
      </Stack>

      <Stack
        flex={1}
        style={{
          marginTop: verticalScale(10),
        }}
      >
        <FlatList
          data={savedList}
          renderItem={({ item }) => (
            <DetailPlaylist
              title={item.title}
              description={item.description}
              icon={item.icon}
              image={item.image}
              radius={item.rounded ? 9999 : 0}
              onPress={() => {
                // Ở màn hình trước, chuyển qua
                navigation.navigate(SCREEN_NAME.AlbumScreen, {
                  data: item.origin,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          style={{
            marginBottom: verticalScale(15),
          }}
        />
      </Stack>
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