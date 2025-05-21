import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ThemedView = ({style, safe=false, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    if(!safe) return (
      <View 
          style={[{
              backgroundColor: theme.background
          },style]}
          {...props}
      />
    )

    const insets = useSafeAreaInsets()
    return (
      <View
          style={[{
              backgroundColor: theme.background,
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              /*
              paddingLeft: insets.left,
              paddingRight: insets.right
              */
          },style]}
          {...props}
      />
    )
}

/* By making the tag self closing <View /> - we automatically pass in children, 
so we don't have to catch and release them in props.
*/

export default ThemedView