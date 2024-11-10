import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { IMAGE_RESOURCE } from "../constants/image_resource";
import { scale, verticalScale } from "../utils/Scale";
import { ButtonImageSizeContants } from "../constants/font-size";
import Text from "./CText";
import { COLORS } from "../constants/color";
import Stack from './Stack';


export default function DetailSearch(){
    return (
      <Stack style={styles.container} flexDirection="row" justifyContent="flex-start" alignItems="center" width={"100%"} columnGap={scale(8)}>
        <Image
          source={IMAGE_RESOURCE.static.album}
          style={{
            width: ButtonImageSizeContants.xxxl,
            height: ButtonImageSizeContants.xxxl,
          }}
          resizeMode="contain"
        />
        
        <Stack flexDirection="row" justifyContent="center" alignSelf="center" >
            
            <Stack justifyContent="center">
                <Text value="Do for love - B Ray" />
                <Text value={"Album ⁕ Remaster"} size="sm" color={COLORS.tertiary.text}/>
            </Stack>

        </Stack>
      </Stack>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(2),
    }
})