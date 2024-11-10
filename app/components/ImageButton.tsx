import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";

/**
 * @author @Kennex666
 * @param image - Image Resource
 * @param size - Size of the button
 * @param onPress - Function to be called when the button is pressed, it returns an object with active and setActive
 * @param isControllActive - Boolean to determine if the button control in onPress function
 * @param style - Style of the button if needed
 * @returns 
 */
export default function ImageButton({
  image,
  size,
  onPress = () => {},
  isControllActive = false,
  style = {},
}: any): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress({active, setActive});
        !isControllActive && setActive(!active);
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