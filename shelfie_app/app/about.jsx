import { StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { Link } from 'expo-router'

import { Colors } from '../constants/colors'


import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    <StatusBar value="auto" />
    <ThemedView style={[styles.container, {backgroundColor: theme.background}]}>
      <ThemedText title={true} style={styles.title}>About Page</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
    </>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    },
})