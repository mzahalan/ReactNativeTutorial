import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

import Logo from '../assets/img/logo_light.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}/>
      <Text style={[styles.title, {color: 'purple'}]}>The Number 1</Text>
      <Text style={{marginTop: 10, marginBottom: 30}}>
        Reading List App
      </Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
      {/*
      The Card View was a demonstartion from the second video in the tutorial.
      We won't be using it going forward. Leaving it here for demo purposes.
      <View>
        <Text style={styles.card}>Hello, This is a Card.</Text>
      </View>
      */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    },
    /*
    card: {
        backgroundColor: '#eee',
        borderRadius: 5,
        padding: 20,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    */
    img: {
      marginVertical: 20,
    }
})