import { useState, createContext, useEffect } from 'react'
import { databases } from '../lib/appwrite'
import { ID, Permission, Query, Role } from 'react-native-appwrite'
import useUser from '../hooks/useUser'

export const BooksContext = createContext()

const DATABSE_ID = '683689f700075d190d81'
const COLLECTION_ID = '68368a0f0008212937e0'

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const { user } = useUser()

    async function getBooks() {
        setLoading(true)
        try {
            const response = await databases.listDocuments(
                DATABSE_ID, 
                COLLECTION_ID,
                [
                    Query.equal('userid', user.$id)
                ]
            )
            setBooks(response.documents)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    async function getBookById(id) {
        try {
        } catch (error) {
            console.log(error)
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
            await getBooks()
        } catch (error) {
            console.log(error)
        } 
    }
    async function deleteBook(id) {
        try {
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {
        if(user) {
            getBooks()
        } else {
            setBooks([])
        }

    }, [user])

    return (
        <BooksContext.Provider value={{books, getBooks, getBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )
}