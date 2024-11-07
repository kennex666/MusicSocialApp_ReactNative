import { StyleSheet, View } from "react-native";
import CText from "../../components/CText";
import { FontSizeConstants } from "../../constants/font-size";
import HomeScreen from "../HomeScreen";

export default function TestingScreen(): JSX.Element {
  return (
    // Comment 3 dòng dưới khi thực hiện viết màn hình mới
    <View style={styles.container}>
      <CText size={FontSizeConstants.nm}>Màn hình này sử dụng cho việc kiểm thử</CText>  
    </View>
    // Khi làm màn hình mới, thay thế screen bên dưới và bỏ dòng trên đi
    // Ví dụ đang làm màn hình homescreen, import HomeScreen từ "../HomeScreen" và thay thế <View> bằng <HomeScreen/>
    
    // <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
