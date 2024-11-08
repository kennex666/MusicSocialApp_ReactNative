import { StyleSheet, View } from "react-native";
import CText from "../../components/CText";
import { FontSizeConstants } from "../../constants/font-size";
import { vw } from "../../utils/ViewpointEmulator";

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <CText size={FontSizeConstants.xl}>Home Screen</CText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  test:{
    width: vw(100)
  }
});