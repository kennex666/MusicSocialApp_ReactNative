import { SafeAreaView } from "react-native-safe-area-context";
import SignUpButton from "../components/SignUpButton";
import ContinueLogInButton from "../components/ContinueLogInButton";

export default function TestingScreen() {
    return (
        <SafeAreaView style={[{
            flex: 1,
            alignItems: 'center',
            justifyContent: "flex-start",
            backgroundColor: "#000000",
            gap: 20,
            paddingVertical: 10,
        }]}>
            <SignUpButton />
            <ContinueLogInButton 
                text="Continue with Google" 
                image={require("../../assets/adaptive-icon.png")}
            />
        </SafeAreaView>
    )
}
