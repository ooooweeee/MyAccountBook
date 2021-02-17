import SQLite from 'react-native-sqlite-storage'
import CREATE_ACCOUNT_TABLE from './tables/account'

SQLite.DEBUG(false)

const successCallback = e => {
  console.log('database init success!')
}

const errorCallback = () => {
  console.error('database catch error')
}

const initDatabase = function(dbName) {
  if (!dbName) {
    throw new Error('database name is required!')
  }
  if (this.waitting) {
    return new Promise(resolve => {
      this.stacks.push(resolve)
    })
  }
  if (this.db) {
    return Promise.resolve(this.db)
  }
  this.db = SQLite.openDatabase({
    name: dbName,
    location: 'default'
  }, successCallback, errorCallback)

  const _createTable = sql => new Promise(resolve => this.db.executeSql(sql, [], () => resolve(), e => resolve(e)))

  return Promise.all([
    _createTable(CREATE_ACCOUNT_TABLE)
  ]).then(res => {
    if (res.some(item => item !== undefined)) {
      throw new Error(JSON.stringify(res.filter(item => item !== undefined)))
    }
    this.stacks.forEach(func => {
      func(this.db)
    })
    this.waitting = false
    this.stacks = []
    return Promise.resolve(this.db)
  })
}

class Database {
  constructor () {
    this.waitting = false
    this.stacks = []
    this.db = null
  }
  static getInstance () {
    if (!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }

  init () {
    return initDatabase.bind(this)('com.ooooweeee.account.db')
  }

  async cmd (sql, ...params) {
    await this.init()
    return new Promise((resolve, reject) => {
      this.db.transaction(tx => tx.executeSql(sql, params, (_, { rows = {} } = {}) => {
        const result = []
        for (let i = 0; i < rows.length; i++) {
          result.push(rows.item(i))
        }
        resolve(result)
      }, err => reject(err)))
    })
  }
}

export default Database.getInstance()
