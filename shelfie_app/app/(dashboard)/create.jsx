import { StyleSheet, TouchableWithoutFeedback, Keyboard, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { useBooks } from '../../hooks/useBooks'

// Themed Components
import Spacer from '../../components/Spacer'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'

const Create = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const router = useRouter()
  const { createBook } = useBooks()

 const handleSubmit = async () => {
    if(!title.trim() || !author.trim() || !description.trim()) return
    setLoading(true)

    try {
      await createBook({title, author, description})
      setTitle("")
      setAuthor("")
      setDescription("")
      router.replace('/books')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <ThemedView style={styles.container}>

        <ThemedText title={true} style={styles.heading}>
          Add a New Book
        </ThemedText>
        <Spacer />

        <ThemedTextInput
          style={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />

        <ThemedTextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer />

        <ThemedTextInput
          style={styles.multiline}
          placeholder="Book Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />
        <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#fff' }}>
            {loading ? "Saving..." : "Create Book"}
          </Text>
        </ThemedButton>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: 'stretch',
    marginHorizontal: 40,
  },
})
