import topCreators from '@/shared/json/top-creators.json'
// import api from '@/api/api'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllTopCreators = () => async (dispatch: Dispatch<Action>) => {
  // const { data } = await api.getFaq()

  try {
    dispatch({
      type: TYPE.TOP_CREATORS_PENDING,
    })
    dispatch({
      type: TYPE.GET_TOP_CREATORS_ALL,
      payload: topCreators,
      total: topCreators?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.TOP_CREATORS_FAIL,
      payload: error,
    })
  }
}
