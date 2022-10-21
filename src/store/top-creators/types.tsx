import { ITopCreator } from './reducer'

export enum TYPE {
  TOP_CREATORS_PENDING = 'TOP_CREATORS_PENDING',
  TOP_CREATORS_FAIL = 'TOP_CREATORS_FAIL',
  GET_TOP_CREATORS_ALL = 'GET_TOP_CREATORS_ALL',
}

interface TOP_CREATORS_PENDING {
  type: TYPE.TOP_CREATORS_PENDING
}

interface TOP_CREATORS_FAIL {
  type: TYPE.TOP_CREATORS_FAIL
  payload: string
}

interface GET_TOP_CREATORS_ALL {
  type: TYPE.GET_TOP_CREATORS_ALL
  payload: ITopCreator[]
  total: number
}

export type Action = TOP_CREATORS_PENDING | TOP_CREATORS_FAIL | GET_TOP_CREATORS_ALL
