import { StyleSheet, Text } from 'react-native'

// Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Login = () => {
    const handleSubmit = () => {
    console.log('Login form submitted')
}
  return (
    <ThemedView style={styles.container}>
        <Spacer/>
        <ThemedText title={true} style={styles.title}>Login to Your Account</ThemedText>
        <ThemedButton
                onPress={handleSubmit}
            >
                <Text style={{textAlign: 'center', color: '#f2f2f2'}}>Login</Text>
            </ThemedButton>
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
        alignItems: 'center'
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