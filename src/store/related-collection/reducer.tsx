import { Action, TYPE } from './types'
// import related from '@/shared/json/related-collection.json'

export interface IUser {
  fullName: string
  avatar: string
}

export interface IRelated {
  id: number
  time: string
  collectionName: string
  users: IUser[]
  favorite: number
  ETH: string
  background: string
}

interface IState {
  related: IRelated[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  related: [],
  total: 0,
  loading: false,
  error: null,
}

const relatedReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.RELATED_COLLECTION_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.RELATED_COLLECTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_RELATED_COLLECTION_ALL:
      return { ...state, loading: false, related: action.payload, total: action.total }

    default:
      return state
  }
}

export default relatedReducer
