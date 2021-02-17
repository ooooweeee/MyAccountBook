import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

const TodoList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        TodoList Page
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TodoList
