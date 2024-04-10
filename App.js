import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Task from './src/Task'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <Task />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})