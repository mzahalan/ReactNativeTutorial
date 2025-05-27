import { createContext, useEffect, useState } from 'react';
import { ID } from 'react-native-appwrite';

import { account } from '../lib/appwrite';

export const UserContext = createContext({
//   user: {
//     name: "Dummy Name",
//     email: "XXXXXXXXXXXXXXX",
//   },
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    // It takes a second to sync our state with Appwrite.
    // So we use this boolean, which will allow us to delay rendering of 
    // features until we get a response.
    const [authChecked, setAuthChecked] = useState(false)

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const user = await account.get()
            setUser(user)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            throw Error(error.message)
        }
    }

    async function logout() {
        console.log("Logging out user")
        await account.deleteSession('current')
        console.log("User logged out")
        setUser(null)
    }

    async function getInitialUserValue() {
        try {
            const user = await account.get()
            setUser(user)
        } catch (error) {
            console.log(error)
            setUser(null)
        } finally {
            setAuthChecked(true)
        }
    }

    // https://react.dev/reference/react/useEffect
    // This hook will run when this object is instantiated (when the app loads)
    // It's useful for syncing the state of the app with a remote state
    // in this case the remote state is "Does Appwrite think we're logged in?"
    useEffect(() => {
        getInitialUserValue()
    }, [])

    return (
        <UserContext.Provider value={{ user, authChecked, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}
