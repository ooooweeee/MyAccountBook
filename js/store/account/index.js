import store from '../'
import {
  increment,
  remove,
  selectAccount
} from './reducer'
import guid from '../../utils/guid'
import { TYPE_VALUE } from '../../database/tables/account'
import { createAccount } from '../../database/actions/create'
import { removeccount } from '../../database/actions/delete'

export const SelectAccount = selectAccount

const createAction = (type, price) => {
  const action = {
    id: guid(),
    type,
    time: Date.now(),
    price
  }
  createAccount(action)
  return action
}

export const initAccount = accounts => {
  accounts.forEach(item => store.dispatch(increment(item)))
}

export const CreateEatAccount = price => {
  const action = createAction(TYPE_VALUE.EAT, price - 0)
  store.dispatch(increment(action))
  return action.id
}

export const CreateTravelAccount = price => {
  const action = createAction(TYPE_VALUE.TRAVEL, price - 0)
  store.dispatch(increment(action))
  return action.id
}

export const CreatePlaylAccount = price => {
  const action = createAction(TYPE_VALUE.PLAY, price - 0)
  store.dispatch(increment(action))
  return action.id
}

export const CreateLooksAccount = price => {
  const action = createAction(TYPE_VALUE.LOOKS, price - 0)
  store.dispatch(increment(action))
  return action.id
}

export const CreateStudyAccount = price => {
  const action = createAction(TYPE_VALUE.STUDY, price)
  store.dispatch(increment(action))
  return action.id
}

export const RemoveAccount = id => {
  removeccount(id)
  store.dispatch(remove(id))
}
