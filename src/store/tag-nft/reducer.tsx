import { Action, TYPE } from './types'

export interface INftTag {
  title: string
  id: number
}

interface IState {
  nftTag: INftTag[]
  total: number
  loading: boolean
  error: string | null
}

const initialState = {
  nftTag: [],
  total: 0,
  loading: false,
  error: null,
}

const nftTagReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.NFT_TAG_PENDING:
      return { ...state, loading: true, error: null }
    case TYPE.NFT_TAG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case TYPE.GET_NFT_TAG_ALL:
      return { ...state, loading: false, nftTag: action.payload, total: action.total }

    default:
      return state
  }
}

export default nftTagReducer
