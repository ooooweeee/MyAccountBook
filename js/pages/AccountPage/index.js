import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Keyboard,
  StatusBar
} from 'react-native'
import PriceInput from '../../components/PriceInput'
import Icon from '../../components/icons'
import {
  CreateEatAccount,
  CreateTravelAccount,
  CreatePlaylAccount,
  CreateLooksAccount,
  CreateStudyAccount
} from '../../store/account'

const AccountPage = ({ navigation }) => {
  const [price, setPrice] = useState('')
  const createAccount = type => {
    if (price === '') {
      return
    }
    let _id
    switch (type) {
      case 'eat':
        _id = CreateEatAccount(price)
        break
      case 'travel':
        _id = CreateTravelAccount(price)
        break
      case 'play':
        _id = CreatePlaylAccount(price)
        break
      case 'looks':
        _id = CreateLooksAccount(price)
        break
      case 'study':
        _id = CreateStudyAccount(price)
        break
      default:
        break
    }
    setPrice('')
    navigation.navigate('AccountLists', {
      id: _id
    })
  }
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss()
      }}
      activeOpacity={1}>
      <StatusBar barStyle="dark-content"></StatusBar>
      <SafeAreaView style={styles.container}>
        <PriceInput
          style={styles.content}
          value={price}
          onInput={text => setPrice(text)}></PriceInput>
        <View
          style={styles.tips}>
          <View
            style={styles.shortcut}>
            <Text>Tip:</Text>
            <TouchableOpacity
              onPress={() => setPrice('5')}
              style={styles.example}>
              <Text
                style={styles.number}>5</Text>
              <Icon
                name="icon-money"
                size={12}
                style={styles.money}></Icon>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountLists')}
            style={styles.more}>
            <Icon name="icon-more"></Icon>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => createAccount('eat')}
          activeOpacity={.8}
          style={{ ...styles.btn, ...styles.eatBtn }}>
          <Text
            style={styles.btnText}>食</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => createAccount('travel')}
          activeOpacity={.8}
          style={styles.btn}>
          <Text
            style={styles.btnText}>行</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => createAccount('play')}
          activeOpacity={.8}
          style={{ ...styles.btn, ...styles.playBtn }}>
          <Text
            style={styles.btnText}>娱</Text>
        </TouchableOpacity>
        <View
          style={styles.others}>
          <TouchableOpacity
            onPress={() => createAccount('looks')}
            activeOpacity={.8}
            style={{ ...styles.btn, ...styles.otherBtn, ...styles.looksBtn }}>
            <Text
              style={styles.otherBtnText}>貌</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => createAccount('study')}
            activeOpacity={.8}
            style={{ ...styles.btn, ...styles.otherBtn, ...styles.studyBtn }}>
            <Text
              style={styles.otherBtnText}>学</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '80%'
  },
  tips: {
    flexDirection: 'row',
    width: '65%',
    height: 30,
    alignItems: 'center'
  },
  shortcut: {
    flex: 1,
    flexDirection: 'row'
  },
  example: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 19,
    alignItems: 'center'
  },
  number: {
  },
  money: {
  },
  more: {
    width: 38,
    alignItems: 'center',
    transform: [{
      translateX: 15
    }]
  },
  btn: {
    width: '70%',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4C90F7',
    borderRadius: 4,
    marginVertical: 5
  },
  btnText: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  eatBtn: {
    marginTop: 10,
    backgroundColor: '#FB7299'
  },
  playBtn: {
    backgroundColor: '#9D53D8'
  },
  others: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  otherBtn: {
    width: '49%'
  },
  otherBtnText: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  looksBtn: {
    backgroundColor: '#617D89'
  },
  studyBtn: {
    backgroundColor: '#8CC051'
  }
})

export default AccountPage
