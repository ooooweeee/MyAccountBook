import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import Icon from './icons'
import { TYPE_VALUE } from '../database/tables/account'
import { fromNow } from '../utils/time'
import { RemoveAccount } from '../store/account'

const ListItem = ({ item, highlight }) => {
  const { id, type, price, time } = item
  const getType = e => {
    switch (e) {
      case TYPE_VALUE.EAT:
        return {
          style: 'eat',
          desc: '食',
          icon: 'icon-eat'
        }
      case TYPE_VALUE.TRAVEL:
        return {
          style: 'travel',
          desc: '行',
          icon: 'icon-travel'
        }
      case TYPE_VALUE.LOOKS:
        return {
          style: 'looks',
          desc: '貌',
          icon: 'icon-looks'
        }
      case TYPE_VALUE.PLAY:
        return {
          style: 'play',
          desc: '娱',
          icon: 'icon-play'
        }
      case TYPE_VALUE.STUDY:
        return {
          style: 'study',
          desc: '学',
          icon: 'icon-study'
        }
    }
  }
  const { style, desc, icon } = getType(type)
  return (
    <TouchableOpacity
      activeOpacity={.8}
      onPress={() => {
        Alert.alert(
          '请注意',
          '是否删除此条目？',
          [
            {
              text: '点错了',
              style: 'cancel'
            },
            {
              text: '确认',
              onPress: () => RemoveAccount(id)
            }
          ]
        )
      }}
      style={{ ...styles.container, backgroundColor: highlight ? '#F4F4F4' : '#FFFFFF' }}>
      <View
        style={{ ...styles.pic, ...styles[style] }}>
        <Icon
          size={28}
          color="#FFFFFF"
          name={icon}></Icon>
      </View>
      <View
        style={styles.info}>
        <View style={styles.price}>
          <Text style={styles.priceNumber}>{price}</Text>
          <Icon name="icon-money" style={styles.priceIcon} size={12} color="#555555"></Icon>
        </View>
        <View style={styles.more}>
          <Text style={styles.desc}>{desc}</Text>
          <Text style={styles.time}>{fromNow(time)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  eat: {
    backgroundColor: '#FB7299'
  },
  travel: {
    backgroundColor: '#4C90F7'
  },
  looks: {
    backgroundColor: '#617D89'
  },
  play: {
    backgroundColor: '#9D53D8'
  },
  study: {
    backgroundColor: '#8CC051'
  },
  info: {
    flex: 1,
  },
  price: {
    flexDirection: 'row',
    height: 28,
    alignItems: 'center'
  },
  priceNumber: {
    fontSize: 18
  },
  priceIcon: {
    marginBottom: -3
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  desc: {
    fontSize: 12,
    color: '#888888',
    width: 20
  },
  time: {
    flex: 1,
    fontSize: 12,
    color: '#888888',
    textAlign: 'right'
  }
})

export default ListItem
