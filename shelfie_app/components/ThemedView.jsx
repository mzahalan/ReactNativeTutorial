import { View, useColorScheme } from 'react-native'
import { Colors } from '../constants/colors'

const ThemedView = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View 
        style={[{
            backgroundColor: theme.background
        },style]}
        {...props}
    />
  )
}

/* By making the tag self closing <View /> - we automatically pass in children, 
so we don't have to catch and release them in props.
*/

export default ThemedView