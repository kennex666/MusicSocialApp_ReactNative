import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";

export default function ImageButton({
  image,
  size,
  onPress = () => {},
  style = {},
}: any): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress(active);
        setActive(!active);
      }}
      style={style}
    >
      <Image
        source={active ? image.active ?? image : image.inactive ?? image}
        resizeMode="contain"
        style={{
          width: size,
          height: size,
        }}
      />
    </TouchableOpacity>
  );
}