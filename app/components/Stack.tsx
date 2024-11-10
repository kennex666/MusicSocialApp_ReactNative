import { TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";

interface StackProps {
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignSelf?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  style?: any;
  children: any;
  onPress?: any;
  onLongPress?: any;
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string | null;
  flex?: number | null;
}

export default function Stack({
  justifyContent = "flex-start",
  alignItems = "flex-start",
  alignSelf = "flex-start",
  flexDirection = "column",
  gap = 0,
  rowGap = 0,
  columnGap = 0,
  style = {},
  onPress = null,
  onLongPress = null,
  disabled = false,
  children,
  width = 0,
  height = 0,
  backgroundColor = null,
  flex = null,
  ...props
}: StackProps): JSX.Element {
  return onPress || onLongPress ? (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      disabled={disabled}
      style={[
        width
          ? {
              width: width,
            }
          : null,
        height
          ? {
              height: height,
            }
          : null,
        backgroundColor
          ? {
              backgroundColor: backgroundColor,
            }
          : null,
        flex ? { flex: flex } : null,
        {
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignSelf: alignSelf,
          rowGap: rowGap,
          columnGap: columnGap,
          gap: gap,
          ...style,
        },
      ]}
      {...props}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View
      style={[
        width
          ? {
              width: width,
            }
          : null,
        height
          ? {
              height: height,
            }
          : null,
        backgroundColor
          ? {
              backgroundColor: backgroundColor,
            }
          : null,
        flex ? { flex: flex } : null,
        {
          display: "flex",
          flexDirection: flexDirection,
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignSelf: alignSelf,
          rowGap: rowGap,
          columnGap: columnGap,
          gap: gap,
          ...style,
        },
      ]}
      {...props}
    >
      {children}
    </View>
  );
}
