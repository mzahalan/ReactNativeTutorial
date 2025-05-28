import { useState, createContext } from 'react'

export const BooksContext = createContext()

const DATABSE_ID = '683689f700075d190d81'
const COLLECTION_ID = '68368a0f0008212937e0'

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    async function getBooks() {
        setLoading(true)
        try {
            //const response = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<YOUR_GoogleAPIKey_HERE>')
            //const data = await response.json()
            //setBooks(data.items)
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

    return (
        <BooksContext.Provider value={{books, getBooks, getBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    )
}