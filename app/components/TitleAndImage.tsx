import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import Text from "./CText";
import Stack from "./Stack";
import ImageButton from "./ImageButton";
import { scale, verticalScale } from "../utils/Scale";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { vw } from "../utils/ViewpointEmulator";
import { COLORS } from "../constants/color";


export default function TitleAndImage({title, data, onPress}: any): JSX.Element {
  return (
        <Stack flexDirection="column">
          {/* First bar */}
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text size="xl" value={title} bold />
          </Stack>

          {/* Flatlist album */}
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Stack
                flexDirection="column"
                alignItems="flex-start"
                rowGap={verticalScale(5)}
                style={{
                  marginRight: scale(10),
                }}
                onPress={() => {
                  onPress && onPress(item.id);
                }}
              >
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    width: vw(30),
                    height: vw(30),
                  }}
                />
                <Text
                  size="sm"
                  value={item.name}
                  color={COLORS.tertiary.text}
                  numberOfLines={2}
                  style={{
                    width: vw(30),
                    // only allow two line
                  }}
                />
              </Stack>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: verticalScale(10),
            }}
          />
        </Stack>
  );
}