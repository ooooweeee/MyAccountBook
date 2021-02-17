import React, { useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import Icon from '../components/icons'

const _iconSize = 40

const PriceInput = ({ style, value, onInput }) => {
  const [focusStatus, setFocusStatus] = useState(false)
  return (
    <View
      style={{ ...styles.container, ...style }}>
      <Icon
        size={_iconSize}
        style={styles.leftBrackets}
        color="#888888"
        name="icon-brackets"></Icon>
      <TextInput
        onFocus={() => setFocusStatus(true)}
        onBlur={() => setFocusStatus(false)}
        style={styles.input}
        value={value}
        onChangeText={text => onInput(text)}
        keyboardType="numeric"
        placeholderTextColor="#cccccc"
        placeholder="金额"></TextInput>
      <Icon
        size={_iconSize - 22}
        style={styles.priceIcon}
        color={focusStatus ? '#000000' : '#888888'}
        name="icon-money"></Icon>
      <Icon
        size={_iconSize}
        color="#888888"
        name="icon-brackets"></Icon>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: _iconSize,
    paddingVertical: 0,
    fontSize: _iconSize - 15
  },
  leftBrackets: {
    transform: [{
      rotateY: '180deg'
    }]
  },
  priceIcon: {
    transform: [{
      translateX: 10
    }, {
      translateY: -5
    }]
  }
})

export default PriceInput
