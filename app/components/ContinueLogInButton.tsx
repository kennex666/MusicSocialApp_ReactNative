import { Image, Text, TouchableOpacity } from "react-native";
import { vh, vw } from "../utils/ViewpointEmulator";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";

export default function ContinueLogInButton(props: any): JSX.Element {
    const { text, image, onPress } = props;
    return (
        <TouchableOpacity
            style={[
                {
                    width: vw(80),
                    height: vh(6),
                    backgroundColor: COLORS.primary.background,
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                    borderRadius: 100,
                    borderColor: COLORS.primary.text,
                    borderWidth: 1,
                },
            ]}
            onPress={onPress}
        >
            <Image
                source={image}
                style={{ width: "25%", height: "50%", marginRight: 10 }}
                resizeMode="contain"
            />
            <Text
                style={[
                    {
                        color: COLORS.primary.text,
                        fontSize: FontSizeConstants.nm,
                        fontWeight: "bold",
                        width: vw(50),
                    },
                ]}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
}
