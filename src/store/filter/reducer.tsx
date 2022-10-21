import { Action, TYPE } from './types'

export interface IStatus {
  title: string
  id: number
}

export interface IFilter {
  status: IStatus[]
}

interface IState {
  filter: IFilter[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  filter: [],
  total: 0,
  loading: false,
  error: null,
}

const filterReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.FILTER_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.FILTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_FILTER_ALL:
      return { ...state, loading: false, filter: action.payload, total: action.total }

    default:
      return state
  }
}

export default filterReducer
