import { Action, TYPE } from './types'
import popular from '@/shared/json/popular-collection.json'

export interface IUser {
  fullName: string
  avatar: string
}

export interface IPopular {
  id: number
  time: string
  collectionName: string
  users: IUser[]
  favorite: number
  ETH: string
  background: string
}

interface IState {
  popular: IPopular[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  popular: [],
  total: 0,
  loading: false,
  error: null,
}

const popularReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.POPULAR_COLLECTION_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.POPULAR_COLLECTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_POPULAR_COLLECTION_ALL:
      return { ...state, loading: false, popular: action.payload, total: action.total }
    case TYPE.GET_POPULAR_COLLECTION_ID:
      return { ...state, loading: false, popular: popular.filter((pop) =>  pop.id === action.payload) }
    default:
      return state
  }
}

export default popularReducer

// import { Action, TYPE } from './types'
// import popular from '@/shared/json/popular-collection.json'
// import api from '@/api/api'
// import popular from './actions'

// const getData = async () => {
//   const pops = await api.popular()
//   const popular = pops?.data?.data
//   return popular
// }

// export interface IAttributes {
//   createdAt: string
//   updatedAt: string
//   publishedAt: string
//   Type: string
//   Size: number
//   TokenId: string
//   Title_English: string
//   Title_TraditionalChinese: string
//   Title_SimplifiedChinese: string
//   Description_English: string
//   Description_TraditionalChinese: string
//   Description_SimplifiedChinese: string
//   Quantity: number
//   CollectionId: number
// }

// export interface IData {
//   id: number
//   attributes: IAttributes[]
// }

// export interface IPopular {
//   data: IData[]
// }

// interface IState {
//   popular: IPopular[]
//   total: number
//   loading: boolean
//   error: string | null
// }

// const initialState = {
//   popular: [],
//   total: 0,
//   loading: false,
//   error: null,
// }

// const popularReducer = async (state: IState = initialState, action: Action): Promise<IState> => {
//   switch (action.type) {
//     case TYPE.POPULAR_COLLECTION_PENDING:
//       return { ...state, loading: true, error: null }
//     case TYPE.POPULAR_COLLECTION_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       }
//     case TYPE.GET_POPULAR_COLLECTION_ALL:
//       return { ...state, loading: false, popular: action.payload, total: action.total }
//     // case TYPE.GET_POPULAR_COLLECTION_ID:
//     //   return { ...state, loading: false, popular: popular.filter((pop: any) => pop.id === action.payload) }

//     default:
//       return state
//   }
// }

// export default popularReducer

