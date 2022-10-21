import popular from '@/shared/json/popular-collection.json'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllPopular = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.POPULAR_COLLECTION_PENDING,
    })
    dispatch({
      type: TYPE.GET_POPULAR_COLLECTION_ALL,
      payload: popular,
      total: popular?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.POPULAR_COLLECTION_FAIL,
      payload: error,
    })
  }
}


export const getPopularById = (id: number) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.POPULAR_COLLECTION_PENDING,
    })
    dispatch({
      type: TYPE.GET_POPULAR_COLLECTION_ID,
      payload: id,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.POPULAR_COLLECTION_FAIL,
      payload: error,
    })
  }
}

// import { Dispatch } from 'redux'
// import { TYPE, Action } from './types'
// // import api from '@/api/api'
// import axios from 'axios'
// import config from '@/config/env'

// export const getAllPopular = () => async (dispatch: Dispatch<Action>) => {
//   // const pop = await api.popular()
//   // const popular = pop?.data?.data

//   try {
//     const popular = await axios.get(`${config.api}/api/products`)
//     // const pop = await api.popular()
//     // const popular = pop?.data?.data
//     dispatch({
//       type: TYPE.POPULAR_COLLECTION_PENDING,
//     })
//     dispatch({
//       type: TYPE.GET_POPULAR_COLLECTION_ALL,
//       payload: popular?.data,
//       total: popular?.total,
//     })
//   } catch (error: any) {
//     dispatch({
//       type: TYPE.POPULAR_COLLECTION_FAIL,
//       payload: error,
//     })
//   }
// }

// export const getPopularById = (id: number) => async (dispatch: Dispatch<Action>) => {
//   try {
//     dispatch({
//       type: TYPE.POPULAR_COLLECTION_PENDING,
//     })
//     dispatch({
//       type: TYPE.GET_POPULAR_COLLECTION_ID,
//       payload: id,
//     })
//   } catch (error: any) {
//     dispatch({
//       type: TYPE.POPULAR_COLLECTION_FAIL,
//       payload: error,
//     })
//   }
// }

