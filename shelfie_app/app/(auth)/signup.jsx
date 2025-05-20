import { StyleSheet, Pressable, Text } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'

const Signup = () => {
    const handleSubmit = () => {
        console.log('Register form submitted')
    }
    return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText title={true} style={styles.title}>Create an Account</ThemedText>
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
        fontWeight: 'bold'
    },
})