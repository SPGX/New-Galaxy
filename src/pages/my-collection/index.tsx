import { Fragment, ReactElement, useEffect, useState } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllTrending } from '@/store/trending-collection/actions'

import Button from '@/components/button'
import Icon from '@/components/icon'
import { useRouter } from 'next/router'

import Title from '@/components/header/title'
import CardExplore from '@/components/card/card-explore'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

import { TITLE_TYPE } from '@/shared/enum/title.enum'
import Searching from '@/components/input/searching'

interface IProps {}

export default function MyCollection({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const isTrending = useTypedSelector((state) => state.trending)
  const isNftTags = useTypedSelector((state) => state.nftTag)

  const [search, setSearch] = useState('')

  const router = useRouter()

  useEffect(() => {
    fetchCollection()
  }, [])

  /* @API: fetch all trending */
  const fetchCollection = async () => {
    await dispatch(getAllTrending())
  }

  const handlerBuyCollection = async (id: number) => {
    router.push(`/detail/${id}`)
  }

  if (isTrending.loading || isNftTags.loading) return <LoadingApi />
  if (isTrending.error || isNftTags.error) return <WarningApi message={isTrending.error || isNftTags.error || ''} />

  return (
    <div className='w-full py-10'>
      <Button classed='text-white hover:text-gray-700' handlerClicked={() => router.back()}>
        <Icon name='chevron-left' color='#00BCD9' size='lg' />
        <span className='text-md font-semibold ml-2'>back</span>
      </Button>
      <Title
        title={TITLE_TYPE.TITLE_NO_SEE}
        header='My Collection'
        total={isTrending.total}
        handlerClicked={fetchCollection}
        classed='text-3xl'
      />
      <div className='flex flex-wrap justify-between mb-10 mt-5'>
        <div className='flex justify-start flex-wrap w-3/4'>
          {/* <Tags items={isNftTags.nftTag} handlerClicked={setTag} /> */}
        </div>
        <div className='flex w-1/4 items-center'>
          <Searching
            state={search}
            setState={setSearch}
            name='search'
            placeholder='Search'
            handleClicked={() => {}}
            classed='bg-transparent border-1'
            type='page'
          />
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex flex-wrap'>
          {isTrending?.trending?.map((trend, index) => (
            <Fragment key={index}>
              <CardExplore item={trend} handlerClicked={() => handlerBuyCollection(trend.id)} priceName='Floor price:' />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
