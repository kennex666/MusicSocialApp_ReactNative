import { Text } from 'react-native';

/**
  * @author Kennex666
  * Custom Text component with custom font and size
  * @param { size } FontSizeConstants - Font size constant
  * @param { ... } any - Other props
  */
export default function CText (props: any): JSX.Element {
  const { style, size } = props;
  if (size)
    return <Text style={[{fontSize: size }, style ?? {}]} {...props} />;
  return <Text style={[{}, style ?? {}]} {...props} />;
};