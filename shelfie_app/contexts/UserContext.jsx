import { createContext, useState } from 'react';
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

    async function login(email, password) {
        try {
            await account.createEmailPasswordSession(email, password)
            const user = await account.get()
            setUser(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function register(email, password) {
        try {
            await account.create(ID.unique(), email, password)
            await login(email, password)
        } catch (error) {
            console.log(error.message)
        }
    }

    async function logout() {
        // setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    )
}
