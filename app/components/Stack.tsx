import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";

interface StackProps {
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | null;
  alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | null;
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | null;
  alignSelf?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | null;
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
  justifyContent = null,
  alignItems = null,
  alignSelf = null,
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
  const styleCustom = [
    width && { width: width },
    height && { height: height },
    backgroundColor && { backgroundColor: backgroundColor },
    flex && { flex: flex },
    alignSelf && { alignSelf: alignSelf },
    alignItems && { alignItems: alignItems },
    gap && { gap: gap },
    rowGap && { rowGap: rowGap },
    columnGap && { columnGap: columnGap },
    justifyContent && { justifyContent: justifyContent },
    {
      display: "flex",
      flexDirection: flexDirection,
      ...style,
    },
  ];
  return onPress || onLongPress ? (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      disabled={disabled}
      style={styleCustom}
      {...props}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <View style={styleCustom} {...props}>
      {children}
    </View>
  );
}
