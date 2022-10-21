import { Fragment, ReactElement, useEffect, useState } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllTrending } from '@/store/trending-collection/actions'

import { useRouter } from 'next/router'

import Title from '@/components/header/title'
import CardPlan from '@/components/card/card-plan'

import api from '@/api/api'

import { TITLE_TYPE } from '@/shared/enum/title.enum'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

//Language
import { useTranslation } from 'react-i18next'

interface IProps {}

export default function TrendingCollection({}: IProps): ReactElement {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const { total, loading, error } = useTypedSelector((state) => state.trending)
  const router = useRouter()
  const [dataCollection, setDataCollection] = useState<any>([])

  useEffect(() => {
    const lang = sessionStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
    fetchCollection()
    getDataCollection()
  }, [])

  /* @API: fetch all trending */
  const fetchCollection = async () => {
    await dispatch(getAllTrending())
  }

  const getDataCollection = async () => {
    const collection = await api.collection()
    setDataCollection(collection?.data?.data)
  }

  /* @Function: handler buy collection */
  const handlerBuyCollection = async (id: number) => {
    sessionStorage.setItem('detail', `${id}`)
    router.push(`/nfts-detail/${id}`)
  }

  if (loading) return <LoadingApi />
  if (error) return <WarningApi message={error} />

  return (
    <div className='w-full py-10'>
      <Title
        title={TITLE_TYPE.TITLE_SEE}
        header={t('trending collections')}
        total={total}
        handlerClicked={fetchCollection}
        classed='text-3xl'
      />
      <div className='w-full flex flex-col'>
        <div className='flex flex-wrap'>
          {dataCollection?.map((trend: any, index: number) => (
            <Fragment key={index}>
              <CardPlan
                item={trend.attributes}
                priceName='Floor price:'
                handlerClicked={() => handlerBuyCollection(trend.id)}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
