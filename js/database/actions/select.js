import database from '../'

import { TABLE_NAME as ACCOUNT_TABLE, TABLE_COLUMN as ACCOUNT_COLUMNS } from '../tables/account'

export const selectAccount = () => database.cmd(`SELECT * FROM ${ACCOUNT_TABLE}`)
