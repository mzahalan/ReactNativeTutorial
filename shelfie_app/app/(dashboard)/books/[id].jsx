import { StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

import React from 'react'

import ThemedText from '../../../components/ThemedText'
import ThemedButton from '../../../components/ThemedButton'
import ThemedView from '../../../components/ThemedView'
import ThemedCard from '../../../components/ThemedCard'
import Spacer from '../../../components/Spacer'

const Details = () => {
  const params = useLocalSearchParams()
  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedCard>
            <ThemedText>Details</ThemedText>
            <Spacer />
            <ThemedText>{params.id}</ThemedText>
        </ThemedCard>
    </ThemedView>
  )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    }
})