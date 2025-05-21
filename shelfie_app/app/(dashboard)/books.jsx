import { StyleSheet, Text, View } from 'react-native'

import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Books = () => {
  return (
    <ThemedView style={styles.container}>
        <Spacer />
      <ThemedText title={true} style={styles.heading}>Your Reading List</ThemedText>
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch' 
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})