import { useEffect } from "react"
import { useRouter } from "expo-router"
import useUser from "../../hooks/useUser"
import { Text } from "react-native"

const GuestOnly = ({children}) => {
    const {user, authChecked } = useUser()
    const router = useRouter()

    //Redirect users to login page if we've synced with Appwrite
    //and they are not logged in.
    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/profile')
        }
    }, [authChecked, user]) // passing values means whenever these values change, run the function.

    
    // Render Loading Screen when we're still syncing with Appwrite
    if(!authChecked || user) {
        return (
            <Text>Loading...</Text>
        )
    }
    
    return children

}

export default GuestOnly