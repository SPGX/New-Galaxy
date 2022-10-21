import filter from '@/shared/json/filter.json'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllFilter = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.FILTER_PENDING,
    })
    dispatch({
      type: TYPE.GET_FILTER_ALL,
      payload: filter,
      total: filter?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.FILTER_FAIL,
      payload: error,
    })
  }
}
