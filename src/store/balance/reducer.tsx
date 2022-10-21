import { Action, TYPE } from './types'

export interface IBalance {
  title: string
  price: number
}

interface IState {
  balance: IBalance[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  balance: [],
  total: 0,
  loading: false,
  error: null,
}

const balanceReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.BALANCE_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.BALANCE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_BALANCE_ALL:
      return { ...state, loading: false, balance: action.payload, total: action.total }

    default:
      return state
  }
}

export default balanceReducer
