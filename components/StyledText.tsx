// IS NOT BEING USED. USE TAILWIND INSTEAD

import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'AfacadFlux-SemiBold' }]} />;
}
