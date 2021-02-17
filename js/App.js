/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

import store from './store'
import Icon from './components/icons'
import AccountPage from './pages/AccountPage'
import AccountListsPage from './pages/AccountPage/list'
import TodoListPage from './pages/TodoListPage'
import database from './database/index'
import { selectAccount } from './database/actions/select'
import { initAccount } from './store/account'

database.init()
selectAccount().then(res => {
  initAccount(res)
})

const Base = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: '记账',
          tabBarIcon: ({ color }) => <Icon name="icon-list" size={28} color={color}></Icon>
        }}
        name="Account"
        component={AccountPage} />
      <Tab.Screen
        options={{
          tabBarLabel: '行程',
          tabBarIcon: ({ color }) => <Icon name="icon-calendar" size={28} color={color}></Icon>
        }}
        name="TodoList"
        component={TodoListPage} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: '首页',
              headerShown: false
            }}
            name="base"
            component={Base} />
          <Stack.Screen
            options={{
              title: '账单'
            }}
            name="AccountLists"
            component={AccountListsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
