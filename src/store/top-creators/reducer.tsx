import { Action, TYPE } from './types'

export interface ITopCreator {
  name: string
  avatar: string
  price: number
  type: string
}

interface IState {
  topCreators: ITopCreator[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  topCreators: [],
  total: 0,
  loading: false,
  error: null,
}

const topCreatorsReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.TOP_CREATORS_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.TOP_CREATORS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_TOP_CREATORS_ALL:
      return { ...state, loading: false, topCreators: action.payload, total: action.total }

    default:
      return state
  }
}

export default topCreatorsReducer
