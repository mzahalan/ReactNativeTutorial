import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { Colors } from '../constants/colors'
import { UserProvider } from '../contexts/UserContext'


const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    /* 
        Keynote from Lesson 14 - 
       by using a UserProvider component we don't have to use the useContext hook on each
       individual page/component.
    */
    return (
        <UserProvider>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: theme.navBackground
                },
                headerTintColor: theme.title,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name="(auth)" options={{headerShown: false}}/>
                <Stack.Screen name="(dashboard)" options={{headerShown: false}}/>
                <Stack.Screen name="index" options={{title: 'Home'}}/>
            </Stack>
        </UserProvider>
    )
}

export default RootLayout


const styles = StyleSheet.create({})