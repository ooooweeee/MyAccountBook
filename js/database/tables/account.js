import { STRING_DATA, NUMBER_DATA } from '../common/data_type'
import createTable from '../common/create_table'

export const TABLE_NAME = 't_account'

export const TYPE_VALUE = {
  EAT: 1,
  TRAVEL: 2,
  PLAY: 3,
  LOOKS: 4,
  STUDY: 5
}

export const TABLE_COLUMN = {
  ID: {
    key: 'id',
    type: STRING_DATA,
    attrs: [
      'PRIMARY KEY'
    ]
  },
  TYPE: {
    key: 'type',
    type: NUMBER_DATA,
    attrs: [
      'DEFAULT 1'
    ],
    values: TYPE_VALUE
  },
  TIME: {
    key: 'time',
    type: NUMBER_DATA,
    attrs: [
      'NOT NULL'
    ]
  },
  PRICE: {
    key: 'price',
    type: NUMBER_DATA,
    attrs: [
      'NOT NULL'
    ]
  }
}

export default createTable(TABLE_NAME, TABLE_COLUMN)
