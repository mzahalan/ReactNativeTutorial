import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true} style={styles.title}>Contact Page</ThemedText>
      <Link href="/" style={styles.link}>
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Contact

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