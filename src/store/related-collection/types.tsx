import { IRelated } from './reducer'

export enum TYPE {
  RELATED_COLLECTION_PENDING = 'RELATED_COLLECTION_PENDING',
  RELATED_COLLECTION_FAIL = 'RELATED_COLLECTION_FAIL',
  GET_RELATED_COLLECTION_ALL = 'GET_RELATED_COLLECTION_ALL',
  GET_RELATED_COLLECTION_ID = 'GET_RELATED_COLLECTION_ID',
}

interface RELATED_COLLECTION_PENDING {
  type: TYPE.RELATED_COLLECTION_PENDING
}

interface RELATED_COLLECTION_FAIL {
  type: TYPE.RELATED_COLLECTION_FAIL
  payload: string
}

interface GET_RELATED_COLLECTION_ALL {
  type: TYPE.GET_RELATED_COLLECTION_ALL
  payload: IRelated[]
  total: number
}

interface GET_RELATED_COLLECTION_ID {
  type: TYPE.GET_RELATED_COLLECTION_ID
  payload: number
}

export type Action = RELATED_COLLECTION_PENDING | RELATED_COLLECTION_FAIL | GET_RELATED_COLLECTION_ALL | GET_RELATED_COLLECTION_ID
