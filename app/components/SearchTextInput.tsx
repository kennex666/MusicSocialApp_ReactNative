import { Image, TextInput } from "react-native";
import Stack from "./Stack";

export default function SearchTextInput({
  width,
  height = 50,
  image,
  backgroundColor,
  placeholder,
  placeholderTextColor,
  textColor,
  textSize,
  setText,
  text
}: any): JSX.Element {
  return (
    <Stack
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      flexDirection={"row"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      style={{ borderRadius: height / 10 }}
    >
      <Stack
        width={"15%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          source={image}
          style={{
            height: "60%",
            aspectRatio: 1,
          }}
          resizeMode="contain"
        />
      </Stack>
      <TextInput
        style={{
          width: "85%",
          height: "100%",
          color: textColor,
          fontSize: textSize,
        }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(text) => {
            setText(text)
        }}
        value={text}
      />
    </Stack>
  );
}
