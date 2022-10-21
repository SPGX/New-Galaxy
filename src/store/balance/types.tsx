import { IBalance } from './reducer'

export enum TYPE {
  BALANCE_PENDING = 'BALANCE_PENDING',
  BALANCE_FAIL = 'BALANCE_FAIL',
  GET_BALANCE_ALL = 'GET_BALANCE_ALL',
}

interface BALANCE_PENDING {
  type: TYPE.BALANCE_PENDING
}

interface BALANCE_FAIL {
  type: TYPE.BALANCE_FAIL
  payload: string
}

interface GET_BALANCE_ALL {
  type: TYPE.GET_BALANCE_ALL
  payload: IBalance[]
  total: number
}

export type Action = BALANCE_PENDING | BALANCE_FAIL | GET_BALANCE_ALL
