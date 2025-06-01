import { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedView from '../../../components/ThemedView'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'
import { useBooks } from '../../../hooks/useBooks'
import ThemedLoader from '../../../components/ThemedLoader'

const Details = () => {
  const {id} = useLocalSearchParams()
  const [book, setBook] = useState(null)
  const {getBookById} = useBooks()

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
    }
})