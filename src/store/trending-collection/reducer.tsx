import { Action, TYPE } from './types'

export interface IUser {
  fullName: string
  avatar: string
}

export interface ITrending {
  time: string
  id: number
  collectionName: string
  user: IUser
  favorite: number
  ETH: string
  background: string
}

interface IState {
  trending: ITrending[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  trending: [],
  total: 0,
  loading: false,
  error: null,
}

const trendingReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.TRENDING_COLLECTION_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.TRENDING_COLLECTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_TRENDING_COLLECTION_ALL:
      return { ...state, loading: false, trending: action.payload, total: action.total }

    default:
      return state
  }
}

export default trendingReducer
