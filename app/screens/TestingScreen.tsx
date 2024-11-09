import { SafeAreaView } from "react-native-safe-area-context";
import SignUpButton from "../components/SignUpButton";
import ContinueLogInButton from "../components/ContinueLogInButton";
import FormTextInput from "../components/FormTextInput";
import NextButton from "../components/NextButton";
import ChooseArtistButton from "../components/ChooseArtistButton";
import { ScrollView, View } from "react-native";
import SearchTextInput from "../components/SearchTextInput";
import { vh } from "../utils/ViewpointEmulator";
import ChoosePodcastButton from "../components/ChoosePodcastButton";

export default function TestingScreen() {
    return (
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: "#000000",
                gap: vh(2),
                paddingVertical: vh(2),
            }}
        >
            <SignUpButton />
            <ContinueLogInButton
                text="Continue with Google"
                image={require("../../assets/favicon.png")}
            />
            <ContinueLogInButton
                text="Continue with Facebook"
                image={require("../../assets/favicon.png")}
            />
            <ContinueLogInButton
                text="Continue with Apple"
                image={require("../../assets/favicon.png")}
            />
            <FormTextInput />
            <NextButton />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                }}
            >
                <ChooseArtistButton
                    image={require("../../assets/adaptive-icon.png")}
                />
                <ChooseArtistButton
                    image={require("../../assets/adaptive-icon.png")}
                />
                <ChooseArtistButton
                    image={require("../../assets/adaptive-icon.png")}
                />
            </View>
            <SearchTextInput 
                image={require("../../assets/favicon.png")}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                }}
            >
                <ChoosePodcastButton
                    image={require("../../assets/adaptive-icon.png")}
                />
                <ChoosePodcastButton
                    image={require("../../assets/adaptive-icon.png")}
                />
                <ChoosePodcastButton
                    image={require("../../assets/adaptive-icon.png")}
                />
            </View>
        </ScrollView>
    );
}
