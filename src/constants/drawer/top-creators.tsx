import { ReactElement, useEffect } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllTopCreators } from '@/store/top-creators/actions'

import CardList from '@/components/card/card-list'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

interface IProps {}

export default function TopCreators({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const { topCreators, loading, error } = useTypedSelector((state) => state.topCreators)

  useEffect(() => {
    fetchTopCreators()
  }, [])

  /* @API: fetch top creators */
  const fetchTopCreators = async () => {
    await dispatch(getAllTopCreators())
  }

  if (loading) return <LoadingApi />
  if (error) return <WarningApi message={error} />

  return <CardList title='top creators' cards={topCreators} handlerClicked={fetchTopCreators} />
}
