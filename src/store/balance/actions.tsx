import balance from '@/shared/json/balances.json'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllBalance = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.BALANCE_PENDING,
    })
    dispatch({
      type: TYPE.GET_BALANCE_ALL,
      payload: balance,
      total: balance?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.BALANCE_FAIL,
      payload: error,
    })
  }
}
