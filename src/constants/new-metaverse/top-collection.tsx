import { Fragment, ReactElement, useEffect } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllTrending } from '@/store/trending-collection/actions'

import Title from '@/components/header/title'
import CardTop from '@/components/card/card-top'

import { TITLE_TYPE } from '@/shared/enum/title.enum'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

interface IProps {}

export default function TopCollection({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const { topCreators, total, loading, error } = useTypedSelector((state) => state.topCreators)

  useEffect(() => {
    fetchCollection()
  }, [])

  /* @API: fetch all trending */
  const fetchCollection = async () => {
    await dispatch(getAllTrending())
  }

  if (loading) return <LoadingApi />
  if (error) return <WarningApi message={error} />

  return (
    <div className='w-full py-10'>
      <Title
        title={TITLE_TYPE.TITLE_SEE}
        header='top collections'
        total={total}
        handlerClicked={fetchCollection}
        classed='text-3xl'
      />
      <div className='w-full flex flex-col'>
        <div className='flex flex-wrap'>
          {topCreators?.map((trend, index) => (
            <Fragment key={index}>
              <CardTop item={trend} index={index} priceName='Floor price:' />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
