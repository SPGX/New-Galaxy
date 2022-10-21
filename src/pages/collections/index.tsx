import { Fragment, ReactElement, useEffect, useState } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllTrending } from '@/store/trending-collection/actions'
import { getAllNftTags } from '@/store/tag-nft/actions'

import Button from '@/components/button'
import Icon from '@/components/icon'
import { useRouter } from 'next/router'

import Title from '@/components/header/title'
import CardExplore from '@/components/card/card-explore'
import Tags from '@/components/tags'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

import { TITLE_TYPE } from '@/shared/enum/title.enum'
import Searching from '@/components/input/searching'
// import config from '@/config/env'

import api from '@/api/api'

interface IProps {}

export default function ExploreCollection({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const isTrending = useTypedSelector((state) => state.trending)
  const isNftTags = useTypedSelector((state) => state.nftTag)
  const [dataCollection, setDataCollection] = useState<any>([])

  const [search, setSearch] = useState('')
  const [tag, setTag] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    fetchCollection()
    fetchNftTag()
  }, [])

  useEffect(() => {
    fetchNftTag()
    getDataCollection()
  }, [search, tag])

  const getDataCollection = async () => {
    const collection = await api.collection()
    setDataCollection(collection?.data?.data)
  }

  /* @API: fetch all trending */
  const fetchCollection = async () => {
    await dispatch(getAllTrending())
  }

  /* @API: fetch all trending */
  const fetchNftTag = async () => {
    await dispatch(getAllNftTags(search, tag))
  }

  const handlerBuyCollection = async (id: any) => {
    console.log("dataCollection", id?.id);
    // sessionStorage.setItem('detail', `${id}`)
    // router.push(`/nfts-detail/${id}`)
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
        title={TITLE_TYPE.TITLE_SEE}
        header='explore collections'
        total={isTrending.total}
        handlerClicked={fetchCollection}
        classed='text-3xl'
      />
      <div className='flex flex-wrap justify-between mb-10 mt-5'>
        <div className='flex justify-start flex-wrap w-3/4'>
          <Tags items={isNftTags.nftTag} handlerClicked={setTag} />
        </div>
        <div className='flex w-1/4 items-center'>
          <Searching
            state={search}
            setState={setSearch}
            name='search'
            placeholder='Search'
            handleClicked={() => fetchNftTag()}
            classed='bg-transparent border-1'
            type='page'
          />
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='flex flex-wrap'>
          {dataCollection?.map((trend: any, index: number) => (
            <Fragment key={index}>
              <CardExplore
                item={trend.attributes}
                handlerClicked={() => handlerBuyCollection(trend)}
                priceName='Floor price:'
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

{
  /* <div className='relative rounded text-gray-600 focus-within:text-gray-400 w-72 sm:max-w-lg md:max-w-md lg:max-w-xl justify-items-stretch'>
            <input
              type='search'
              id="search"
              name="search"
              value={search}
              className={
                'h-9 w-full text-sm text-gray-400 rounded-2xl pl-4 pr-3 border-none outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white ' +
              }
              onChange={(e) => onChangeHandle(e)}
              onKeyPress={(e) => onKeyDownHandle(e)}
              placeholder={`${placeholder}`}
            />
            <span className='absolute inset-y-0 right-4 flex items-center pl-2'>
              <button type='button' className='p-1 focus:outline-none focus:shadow-outline' onClick={() => handleClicked()}>
                <Icon name='search' color='#808080' />
              </button>
            </span>
          </div> */
}
