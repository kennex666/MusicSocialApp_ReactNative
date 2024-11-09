import { SafeAreaView } from "react-native-safe-area-context";
import SignUpButton from "../components/SignUpButton";
import ContinueLogInButton from "../components/ContinueLogInButton";
import FormTextInput from "../components/FormTextInput";

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
        </SafeAreaView>
    )
}
