import { Fragment, ReactElement, useEffect, useState } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import Button from '@/components/button'
import Icon from '@/components/icon'
import { useRouter } from 'next/router'

import { getAllPopular } from '@/store/popular-collection/actions'
import { getAllNftTags } from '@/store/tag-nft/actions'
import { getAllFilter } from '@/store/filter/actions'

import Dropdown from '@/components/dropdown'

import Title from '@/components/header/title'

// import CardExplore from '@/components/card/card-explore'
import CardPlan from '@/components/card/card-plan'

import Tags from '@/components/tags'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'
import Filter from '@/components/filter'
import Modal from '@/components/modal'

import { TITLE_TYPE } from '@/shared/enum/title.enum'
import Searching from '@/components/input/searching'
import api from '@/api/api'

interface IProps {}

export default function Ntfs({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const popular = useTypedSelector((state) => state.popular)
  const isNftTags = useTypedSelector((state) => state.nftTag)
  const isFilter = useTypedSelector((state) => state.filter)
  const [dataPopular, setDataPopular] = useState<any>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [, setOpen] = useState<boolean>(true)
  const [Type] = useState<string>('buy')

  const [search, setSearch] = useState('')
  const [tag, setTag] = useState<string>('')
  const [usdc] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    fetchPopular()
    fetchNftTag()
    fetchFilter()
  }, [])

  useEffect(() => {
    fetchNftTag()
    getDataProducts()
  }, [search, tag])

  useEffect(() => {
    getDataProducts()
  }, [dataPopular])

  const getDataProducts = async () => {
    const popular = await api.popular()
    // console.log('POPULAR >>', popular.data.data)
    setDataPopular(popular?.data?.data)
  }

  /* @API: fetch all popular */
  const fetchPopular = async () => {
    await dispatch(getAllPopular())
  }

  /* @API: fetch all filter */
  const fetchFilter = async () => {
    await dispatch(getAllFilter())
  }

  /* @API: fetch all trending */
  const fetchNftTag = async () => {
    await dispatch(getAllNftTags(search, tag))
  }

  const handlerBuyCollection = async (id: number) => {
    sessionStorage.setItem('detail', `${id}`)
    router.push(`/nfts-detail/${id}`)
  }

  const handleOpenBuy = () => {
    setShowModal(true)
    setOpen(false)
  }

  const handleShowModalSell = () => {
    setStatus('success')
    if (status) {
      setShowModal(false)
      setStatus('')
    }
  }

  const handleClose = () => {
    setShowModal(false)
  }

  /* @API: fetch search */
  const fetchSearch = async () => {
    console.log('fetch search')
  }

  if (popular.loading || isNftTags.loading || isFilter.loading) return <LoadingApi />
  if (popular.error || isNftTags.error || isFilter.error)
    return <WarningApi message={popular.error || isNftTags.error || isFilter.error || ''} />
  return (
    <div className='w-full py-10'>
      <Button classed='text-white hover:text-gray-700' handlerClicked={() => router.back()}>
        <Icon name='chevron-left' color='#00BCD9' size='lg' />
        <span className='text-md font-semibold ml-2'>back</span>
      </Button>
      <Title
        title={TITLE_TYPE.TITLE_SEE}
        header='Explore NFTs'
        total={dataPopular.length}
        handlerClicked={fetchNftTag}
        classed='text-3xl'
      />
      <div className='flex flex-wrap mb-10 mt-5 justify-between'>
        <div className='flex justify-start flex-wrap w-[60%]'>
          <Tags items={isNftTags.nftTag} handlerClicked={setTag} />
        </div>
        <div className='flex w-[35%] items-center'>
          <Dropdown items={[]} />
          <Searching
            state={search}
            setState={setSearch}
            name='search'
            placeholder='search items'
            handleClicked={() => fetchNftTag()}
            classed='bg-transparent border-1 relative'
            type='page'
          />
        </div>
      </div>
      <Filter items={isFilter.filter} />
      <div className='w-full flex flex-col'>
        <div className='flex flex-wrap'>
          {dataPopular?.map((trend: any, index: number) => (
            <Fragment key={index}>
              <CardPlan
                classed={'flex xl:w-1/4 cursor-pointer'}
                item={trend.attributes}
                priceName='Current Bids:'
                isButton={true}
                buttonName='Place a Bid'
                bgPlaceholder={'bg-placeholder'}
                handlerClicked={(e: any) => {
                  handlerBuyCollection(trend.id), e.stopPropagation()
                }}
                handlerBuy={handleOpenBuy}
              />
            </Fragment>
          ))}
        </div>
      </div>
      {showModal ? (
        <>
          {Type !== 'buy' ? (
            <Modal
              title='Buy Now'
              subtitle='You are about to place a bid for land123 by New Galaxy'
              setShowModal={handleShowModalSell}
              HandleClose={handleClose}
              bid='Buy now price'
              button_enter='Confirm to place your bid'
              least='Must be at least 15.000 USDC'
              your_buy='15.000 USD'
              your_balance='8765.432 USD'
              service_fee='1.234 USD'
              you_will_pay='16.234 USD'
              status={status}
              usdc={usdc}
              state={search}
              setState={setSearch}
              handleClicked={() => fetchSearch()}
            />
          ) : (
            <Modal
              title='Place a bid'
              subtitle='You are about to place a bid for land123 by New Galaxy'
              setShowModal={handleShowModalSell}
              bid='Your bid'
              HandleClose={handleClose}
              button_enter='Confirm to buy now'
              least='Must be at least 15.000 USDC'
              your_bid='15.000 USD'
              your_balance='8765.432 USD'
              service_fee='1.234 USD'
              you_will_pay='16.234 USD'
              status={status}
              usdc={usdc}
              state={search}
              setState={setSearch}
              handleClicked={() => fetchSearch()}
            />
          )}
        </>
      ) : null}
    </div>
  )
}
