import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import { SelectAccount } from '../../store/account'
import ListItem from '../../components/ListItem'

const AccountListsPage = ({ route: { params = {} } = {} }) => {
  const { id } = params
  const getAccount = useSelector(SelectAccount)
  const renderItem = ({ item }) => <ListItem item={item} highlight={id === item.id}></ListItem>
  const renderGap = () => <View style={styles.renderGap}></View>
  return (
    <FlatList
      data={getAccount}
      renderItem={renderItem}
      ItemSeparatorComponent={renderGap}
      keyExtractor={item => item.id}></FlatList>
  )
}

const styles = StyleSheet.create({
  renderGap: {
    height: StyleSheet.hairlineWidth
  }
})

export default AccountListsPage
