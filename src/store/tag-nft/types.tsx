import { INftTag } from './reducer'

export enum TYPE {
  NFT_TAG_PENDING = 'NFT_TAG_PENDING',
  NFT_TAG_FAIL = 'NFT_TAG_FAIL',
  GET_NFT_TAG_ALL = 'GET_NFT_TAG_ALL',
}

interface NFT_TAG_PENDING {
  type: TYPE.NFT_TAG_PENDING
}

interface NFT_TAG_FAIL {
  type: TYPE.NFT_TAG_FAIL
  payload: string
}

interface GET_NFT_TAG_ALL {
  type: TYPE.GET_NFT_TAG_ALL
  payload: INftTag[]
  total: number
}

export type Action = NFT_TAG_PENDING | NFT_TAG_FAIL | GET_NFT_TAG_ALL
