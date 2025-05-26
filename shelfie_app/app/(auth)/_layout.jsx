import { StatusBar } from 'react-native'
import { Stack } from 'expo-router'
import useUser from '../../hooks/useUser'

export default function AuthLayout() {
  const {user} = useUser()
  console.log(user)

  return (
    <>
      <StatusBar style="auto" />
      <Stack
      screenOptions={{
        headerShown: false,
        animation: "none"
      }}
      />
    </>
  )
}
