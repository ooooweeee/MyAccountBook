import database from '../'

import { TABLE_NAME as ACCOUNT_TABLE, TABLE_COLUMN as ACCOUNT_COLUMNS } from '../tables/account'

export const removeccount = id => database.cmd(`DELETE FROM ${ACCOUNT_TABLE} WHERE ${ACCOUNT_COLUMNS.ID.key} = ?`, id)
