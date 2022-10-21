import trending from '@/shared/json/trending-collection.json'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllTrending = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.TRENDING_COLLECTION_PENDING,
    })
    dispatch({
      type: TYPE.GET_TRENDING_COLLECTION_ALL,
      payload: trending,
      total: trending?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.TRENDING_COLLECTION_FAIL,
      payload: error,
    })
  }
}
