import { IFilter } from './reducer'

export enum TYPE {
  FILTER_PENDING = 'FILTER_PENDING',
  FILTER_FAIL = 'FILTER_FAIL',
  GET_FILTER_ALL = 'GET_FILTER_ALL',
}

interface FILTER_PENDING {
  type: TYPE.FILTER_PENDING
}

interface FILTER_FAIL {
  type: TYPE.FILTER_FAIL
  payload: string
}

interface GET_FILTER_ALL {
  type: TYPE.GET_FILTER_ALL
  payload: IFilter[]
  total: number
}

export type Action = FILTER_PENDING | FILTER_FAIL | GET_FILTER_ALL
