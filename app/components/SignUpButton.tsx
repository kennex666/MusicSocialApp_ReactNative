import { Text, TouchableOpacity } from "react-native";
import { vw } from "../utils/ViewpointEmulator";
import { COLORS } from "../constants/color";
import { FontSizeConstants } from "../constants/font-size";

export default function SignUpButton(props: any): JSX.Element {
    const { onPress } = props;
    return (
        <TouchableOpacity
            style={[
                {
                    width: vw(80),
                    height: vw(10),
                    backgroundColor: COLORS.spotify.background,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 100,
                },
            ]}
            onPress={onPress}
        >
            <Text
                style={[
                    {
                        color: COLORS.spotify.text,
                        fontSize: FontSizeConstants.nm,
                        fontWeight: "bold",
                    },
                ]}
            >
                Sign up free
            </Text>
        </TouchableOpacity>
    );
}
