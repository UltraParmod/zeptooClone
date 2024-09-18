import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoute from './src/routes/StackRoute'
import { Provider } from 'react-redux'
import { Store } from './src/redux/Store'

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>

    </Provider>
  )
}

const styles = StyleSheet.create({})