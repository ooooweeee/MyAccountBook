import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    accountList: [],
  },
  reducers: {
    increment: (state, { payload }) => {
      state.accountList = [
        payload,
        ...state.accountList
      ]
    },
    remove: (state, { payload: id }) => {
      state.accountList = state.accountList.filter(item => item.id !== id)
    }
  }
})

export const { increment, remove } = accountSlice.actions

export const selectAccount = state => state.account.accountList

export default accountSlice.reducer
