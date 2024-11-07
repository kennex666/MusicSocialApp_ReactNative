import { Text } from 'react-native';
import { FontSizeConstants } from '../constants/font-size';

/**
  * @author Kennex666
  * Custom Text component with custom font and size
  * @param { size } FontSizeConstants - Font size constant
  * @param { ... } any - Other props
  */
export default function CText (props: any): JSX.Element {
  const { style, size } = props;
  return <Text style={[{fontSize: size ?? FontSizeConstants.nm }, style ?? {}]} {...props} />;
};