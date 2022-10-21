import nftTags from '@/shared/json/nft-tags.json'

import { Dispatch } from 'redux'
import { TYPE, Action } from './types'

export const getAllNftTags = (_search: string, _tag: string) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: TYPE.NFT_TAG_PENDING,
    })

    // console.log(`localhost:8080/api/v1/ntf-tag?search=${search}&tag=${tag}`)
    dispatch({
      type: TYPE.GET_NFT_TAG_ALL,
      payload: nftTags,
      total: nftTags?.length,
    })
  } catch (error: any) {
    dispatch({
      type: TYPE.NFT_TAG_FAIL,
      payload: error,
    })
  }
}
