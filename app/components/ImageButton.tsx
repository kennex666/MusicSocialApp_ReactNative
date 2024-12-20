import { useEffect, useState } from "react";
import { TouchableOpacity, Image } from "react-native";

/**
 * @author @Kennex666
 * @param image - Image Resource
 * @param size - Size of the button
 * @param onPress - Function to be called when the button is pressed, it returns an object with active and setActive
 * @param isControllActive - Boolean to determine if the button control in onPress function
 * @param style - Style of the button if needed
 * @param firstState - Initial state of the button
 * @returns 
 */
interface ImageButtonProps {
  image: any;
  size: number;
  onPress?: (arg0: any) => void;
  isControllActive?: boolean;
  style?: any;
  firstState?: boolean;
  radius?: number;
  activeState ?: boolean;
}

export default function ImageButton({
  image,
  size,
  onPress = () => {},
  isControllActive = false,
  style = {},
  firstState = false,
  radius = 0,
  activeState,
  ...props
}: ImageButtonProps): JSX.Element {
  const [active, setActive] = useState(firstState);

    useEffect(() => {
      setActive(activeState);
    }, [activeState]);
    

  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress({ active, setActive });
        !isControllActive && setActive(!active);
      }}
      style={style}
      {...props}
    >
      {image && typeof image != "string" ? (
        <Image
          source={active ? image.active ?? image : image.inactive ?? image}
          resizeMode="contain"
          style={{
            width: size,
            height: size,
          }}
          borderRadius={radius}
        />
      ) : (
        <Image
          source={{
            uri: image,
          }}
          resizeMode="contain"
          style={{
            width: size,
            height: size,
          }}
          borderRadius={radius}
        />
      )}
    </TouchableOpacity>
  );
}