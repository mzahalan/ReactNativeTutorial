import {Client, Account, Avatars} from 'react-native-appwrite'

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6819a364003e704e8469')
    .setPlatform('com.zahalan.shelfie');

export const account = new Account(client)
export const avatars = new Avatars(client)