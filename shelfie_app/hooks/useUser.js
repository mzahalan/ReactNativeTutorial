import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useUser() {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    
    // Context is the object returned from UserProvider
    //context.user
    //context.login()
    //context.register()
    //context.logout()
    
    return context
}