import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
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

export default function HomeScreen(): JSX.Element {
  return (  
    <ScrollView style={styles.container}>
      <Stack justifyContent="space-between" flexDirection="row" style={{
        marginBottom: verticalScale(15)
      }}>
        <Stack flexDirection="row" columnGap={scale(10)} alignItems="center">
          <ImageButton
            image="https://placeholder.com/50x50"
            size={ButtonImageSizeContants.lg}
            radius={9999}
          />
          <Text value="Hi, Bao!" size="xl" bold />
        </Stack>
      </Stack>

      <Stack rowGap={verticalScale(30)}>
        {/* Recently play */}
        <TitleAndImage title="Made for you" data={madeForYou} />

        <TitleAndImage title="Popular radio" data={madeForYou} />

        <TitleAndImage title="Your show" data={madeForYou} />

        <TitleAndImage title="Top chart" data={madeForYou} />
      </Stack>
    </ScrollView>
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