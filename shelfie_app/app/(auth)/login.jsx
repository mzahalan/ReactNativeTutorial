import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

// Themed Components
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
import ThemedTextInput from '../../components/ThemedTextInput'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
    console.log(`Login form submitted: email: ${email}, password: ${password}`)
    Keyboard.dismiss()
}
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText title={true} style={styles.title}>Login to Your Account</ThemedText>

            <ThemedTextInput 
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                style={{
                    width: '80%',
                    marginBottom: 20
                }}
            />

            <ThemedTextInput 
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
                style={{
                    width: '80%',
                    marginBottom: 20
                }}
            />

            <ThemedButton
                    onPress={handleSubmit}
                >
                    <Text style={{textAlign: 'center', color: '#f2f2f2'}}>Login</Text>
                </ThemedButton>
            <Spacer height={100}/>
            <Link href='/signup'><ThemedText style={{textAlign: 'center'}}>Create Account</ThemedText></Link>
        </ThemedView>
    </TouchableWithoutFeedback>
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
        fontWeight: 'bold',
        marginBottom: 30
    }
})

/*
We use Route Groups for 2 reasons:
1 - good organization.
2 - We can make nested layouts.
*/