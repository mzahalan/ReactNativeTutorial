import { createContext, useState } from 'react';

export const UserContext = createContext({
//   user: {
//     name: "Dummy Name",
//     email: "XXXXXXXXXXXXXXX",
//   },
});

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    async function login(email, password) {
        // const response = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        // const data = await response.json()
        // setUser(data)
    }

    async function register(email, password) {
        // const response = await fetch('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        // const data = await response.json()
        // setUser(data)
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
