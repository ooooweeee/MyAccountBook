import database from '../'

import { TABLE_NAME as ACCOUNT_TABLE, TABLE_COLUMN as ACCOUNT_COLUMNS } from '../tables/account'

export const createAccount = ({ id, price, time, type } = {}) => database.cmd(`INSERT INTO ${ACCOUNT_TABLE} (${ACCOUNT_COLUMNS.ID.key},
  ${ACCOUNT_COLUMNS.PRICE.key},
  ${ACCOUNT_COLUMNS.TIME.key},
  ${ACCOUNT_COLUMNS.TYPE.key}) VALUES (?, ?, ?, ?)`, id, price, time, type)
