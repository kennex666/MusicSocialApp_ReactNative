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
import SearchResultButton from "../components/SearchResultButton";
import { IMAGE_RESOURCE } from "../constants/image_resource";


export default function TestingScreen() {
    return (
        <View
            style={{
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
                image={IMAGE_RESOURCE.static.testing}
            />
            <ContinueLogInButton
                text="Continue with Facebook"
                image={IMAGE_RESOURCE.static.testing}
            />
            <ContinueLogInButton
                text="Continue with Apple"
                image={IMAGE_RESOURCE.static.testing}
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
                    image={IMAGE_RESOURCE.static.testing}
                    size={100}
                />
                <ChooseArtistButton
                    image={IMAGE_RESOURCE.static.testing}
                    size={200}
                />
                <ChooseArtistButton
                    image={IMAGE_RESOURCE.static.testing}
                />
            </View>
            <SearchTextInput image={IMAGE_RESOURCE.static.testing} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                }}
            >
                <ChoosePodcastButton
                    image={IMAGE_RESOURCE.static.testing}
                />
                <ChoosePodcastButton
                    image={IMAGE_RESOURCE.static.testing}
                />
                <ChoosePodcastButton
                    image={IMAGE_RESOURCE.static.testing}
                />
            </View>
            <View>
                <SearchResultButton
                    image={IMAGE_RESOURCE.static.testing}
                    title="FKA Twigs"
                    subtitle="Artist"
                />
                <SearchResultButton
                    image={IMAGE_RESOURCE.static.testing}
                    title="FKA Twigs"
                    subtitle="Artist"
                />
                <SearchResultButton
                    image={IMAGE_RESOURCE.static.testing}
                    title="FKA Twigs"
                    subtitle="Artist"
                />
            </View>
        </View>
    );
}
