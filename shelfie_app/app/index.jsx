import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'


// Themed Components
import ThemedLogoImage from '../components/ThemedLogoImage'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'


const Home = () => {
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedLogoImage />
        <Spacer height={20} />
        <ThemedText title={true} style={styles.title}>The Number 1</ThemedText>
        <Spacer height={10} />
        <ThemedText>Reading List App</ThemedText>
        <Spacer height={10} />
        <Link href="/login" style={styles.link}>
          <ThemedText>Login</ThemedText>
        </Link>
        <Link href="/signup" style={styles.link}>
          <ThemedText>SignUp</ThemedText>
        </Link>
        <Link href="/profile" style={styles.link}>
          <ThemedText>Profile</ThemedText>
        </Link>
      </ThemedView>
    </>
  )
}

export default Home

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
    }
})