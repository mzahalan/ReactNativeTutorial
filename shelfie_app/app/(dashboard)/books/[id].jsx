import { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedView from '../../../components/ThemedView'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import { useBooks } from '../../../hooks/useBooks'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/colors'

const Details = () => {
  const {id} = useLocalSearchParams()
  const [book, setBook] = useState(null)
  const {getBookById, deleteBook} = useBooks()
  const router = useRouter()

  const handleDelete = async () => {
    await deleteBook(id)
    setBook(null)
    router.push('/books')
  }

  useEffect(() => {
    if (id) {
      async function loadBook() {
        const bookData = await getBookById(id)
        setBook(bookData)
      }
      loadBook()
    }
  }, [id])

  if(!book) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    )
  }
  //getBookById
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText title={true}>Book Description</ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
      <ThemedButton style={styles.delete} onPress={handleDelete}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
    },
    card: {
        margin: 20
    },
    delete: {
        backgroundColor: Colors.warning,
        marginTop: 40,
        width: 200,
        alignSelf: 'center'
    }
})