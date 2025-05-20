import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Signup = () => {
    return (
        <ThemedView style={styles.container}>
            <Spacer/>
            <ThemedText title={true} style={styles.title}>Create an Account</ThemedText>
            <Spacer height={100}/>
            <Link href='/login'><ThemedText style={{textAlign: 'center'}}>Sign in To Existing Account</ThemedText></Link>
        </ThemedView>
      )
}

export default Signup

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