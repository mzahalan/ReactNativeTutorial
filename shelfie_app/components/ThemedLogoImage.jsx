import { Image, useColorScheme } from 'react-native'

import LightLogo from '../assets/img/logo_light.png'
import DarkLogo from '../assets/img/logo_dark.png'


const ThemedLogoImage = ({...props}) => {
        const colorScheme = useColorScheme()
        const Logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  return (
    <Image source={Logo} {...props}/>
  )
}

export default ThemedLogoImage