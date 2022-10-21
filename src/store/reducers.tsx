import { combineReducers } from 'redux'
import balanceReducer from './balance/reducer'

import trendingReducer from './trending-collection/reducer'
import topCreatorsReducer from './top-creators/reducer'
import popularReducer from './popular-collection/reducer'
import nftTagReducer from './tag-nft/reducer'
import filterReducer from './filter/reducer'
import relatedReducer from './related-collection/reducer'

const reducers = combineReducers({
  trending: trendingReducer,
  popular: popularReducer,
  topCreators: topCreatorsReducer,
  balance: balanceReducer,
  nftTag: nftTagReducer,
  filter: filterReducer,
  related: relatedReducer,
})

export default reducers
export type RootState = ReturnType<typeof reducers>
