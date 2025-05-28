import { StyleSheet } from 'react-native'
import { useBooks } from '../../hooks/useBooks'

import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Books = () => {
  const { books, getBooks } = useBooks()

  return (
    <ThemedView safe={true} style={styles.container}>
        {/*<Spacer />*/}
      <ThemedText title={true} style={styles.heading}>Your Reading List</ThemedText>
    </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*justifyContent: 'center',*/
        alignItems: 'stretch' 
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})