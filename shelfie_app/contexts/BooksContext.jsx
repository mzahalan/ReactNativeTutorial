import { useState, createContext, useEffect } from 'react'
import { databases, client } from '../lib/appwrite'
import { ID, Permission, Query, Role } from 'react-native-appwrite'
import useUser from '../hooks/useUser'

export const BooksContext = createContext()

const DATABSE_ID = '683689f700075d190d81'
const COLLECTION_ID = '68368a0f0008212937e0'

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function getBooks() {
        try {
            const response = await databases.listDocuments(
                DATABSE_ID, 
                COLLECTION_ID,
                [
                    Query.equal('userid', user.$id)
                ]
            )
            setBooks(response.documents)
        } catch (error) {
        } finally {
        }
    }

    async function getBookById(id) {
        try {
            const response = await databases.getDocument(
                DATABSE_ID,
                COLLECTION_ID,
                id
            )
            return response
        } catch (error) {
        } 
    }

    async function createBook(data) {
        try {
            const newBook = await databases.createDocument(
                DATABSE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userid: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        } catch (error) {
            console.log(error)
        } 
    }
    async function deleteBook(id) {
        try {
            await databases.deleteDocument(
                DATABSE_ID,
                COLLECTION_ID,
                id
            )
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        let unsubscribe
        const channel = `databases.${DATABSE_ID}.collections.${COLLECTION_ID}.documents`
        
        if(user) {
            getBooks()

            try {
                unsubscribe = client.subscribe(channel, (response) => {
                    const {payload, events } = response
                    if (events[0].includes('create')) {
                        setBooks(prevBooks => [payload, ...prevBooks])
                    }
                    if (events[0].includes('delete')) {
                        setBooks(prevBooks => prevBooks.filter(book => book.$id !== payload.$id))
                    }
                })
                console.log("()xxxx[[::::Listening for Book List Changes::::>")
            } catch (error) {
                console.log(error)
            }

        } else {
            setBooks([])
        }

        return () => {
            if (unsubscribe) {
                unsubscribe()
            }
        }
    }, [user])

    return (
        <BooksContext.Provider value={{books, getBooks, getBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )
}