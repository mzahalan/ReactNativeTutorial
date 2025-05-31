import { useState, createContext, useEffect } from 'react'
import { databases, client } from '../lib/appwrite'
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
            //await getBooks()
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
        let unsubscribe
        const channel = `databases.${DATABSE_ID}.collections.${COLLECTION_ID}.documents`
        
        if(user) {
            getBooks()

            try {
                unsubscribe = client.subscribe(channel, (response) => {
                    const {payload, events } = response
                    console.log("EVENTS: ")
                    console.log(JSON.stringify(events))
                    if (events[0].includes('create')) {
                        console.log('A NEW BOOK WAS CREATED')
                        setBooks(prevBooks => [payload, ...prevBooks])
                    }/*
                    if (events[0].includes('delete')) {
                        console.log('A BOOK WAS DELETED')
                        console.log(payload)
                        setBooks(prevBooks => prevBooks.filter(book => book.$id !== payload.$id))
                    }*/
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