import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header'
import Options from '../components/home/Options'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <Options />
    </SafeAreaView>
  )
}

export default HomeScreen