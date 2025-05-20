import { StyleSheet } from 'react-native'

// Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Login = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Login to Your Account</ThemedText>
        <Spacer height={100}/>
        <Link href='/signup'><ThemedText style={{textAlign: 'center'}}>Create Account</ThemedText></Link>
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }, 
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

/*
We use Route Groups for 2 reasons:
1 - good organization.
2 - We can make nested layouts.
*/