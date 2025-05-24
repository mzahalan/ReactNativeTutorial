import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import Spacer from '../../components/Spacer'

const Signup = () => {
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
                <ThemedText title={true} style={styles.title}>Create an Account</ThemedText>

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
                    <Text style={{textAlign: 'center', color: '#f2f2f2'}}>Sign Up</Text>
                </ThemedButton>
                <Spacer height={100}/>
                <Link href='/login'>
                    <ThemedText style={{textAlign: 'center'}}>Sign in To Existing Account</ThemedText>
                </Link>
            </ThemedView>
        </TouchableWithoutFeedback>
      )
}

export default Signup

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
})