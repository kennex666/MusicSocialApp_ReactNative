import { SafeAreaView } from "react-native-safe-area-context";
import SignUpButton from "../components/SignUpButton";

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
        </SafeAreaView>
    )
}
