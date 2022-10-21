import related from '@/shared/json/related-collection.json'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllRelated = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.RELATED_COLLECTION_PENDING,
    })
    dispatch({
      type: TYPE.GET_RELATED_COLLECTION_ALL,
      payload: related,
      total: related?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.RELATED_COLLECTION_FAIL,
      payload: error,
    })
  }
}

