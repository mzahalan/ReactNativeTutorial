import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'

import { useState } from 'react'
import useUser from '../../hooks/useUser'
import { Colors } from '../../constants/colors'

// Themed Components
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import ThemedView from '../../components/ThemedView'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)
        console.log(`Login form submitted: email: ${email}, password: ${password}`)

        try{
            await login(email, password)
        }catch(error){
            console.log(error.message)
            setError(error.message)
        }


        Keyboard.dismiss()
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
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

                <ThemedButton onPress={handleSubmit}>
                    <Text style={{ textAlign: 'center', color: '#f2f2f2' }}>Login</Text>
                </ThemedButton>
                <Spacer />
                {error && <Text style={styles.error}>{error}</Text>}
                <Spacer height={100} />
                <Link href='/signup'><ThemedText style={{ textAlign: 'center' }}>Create Account</ThemedText></Link>
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
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderRadius: 6,
        borderWidth: 1,
        marginHorizontal: 10
    }
})

/*
We use Route Groups for 2 reasons:
1 - good organization.
2 - We can make nested layouts.
*/