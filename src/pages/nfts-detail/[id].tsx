import { ReactElement, useEffect, useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useTypedSelector } from '@/hooks'

import { getAllRelated } from '@/store/related-collection/actions'
import { getPopularById } from '@/store/popular-collection/actions'
import { isEmptyObject } from '@/helper'
import { IPopular } from '@/store/popular-collection/reducer'
import ICon from '@/components/icon'

//Component
import CardPlan from '@/components/card/card-plan'
import Title from '@/components/header/title'
import Button from '@/components/button'
import { TITLE_TYPE } from '@/shared/enum/title.enum'
import { MODAL_TYPE } from '@/shared/enum/modal'
import Modal from '@/components/modal'
import ModalSell from '@/components/modalsell'

//API
import api from '@/api/api'
import config from '@/config/env'

//Language
// import { useTranslation } from 'react-i18next'

interface IProps {
  popular: any
}

export default function nftDetailById({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()
  const isPopular = useTypedSelector((state) => state.popular)
  const isRelated = useTypedSelector((state) => state.related)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showModalSell, setShowModalSell] = useState<boolean>(false)
  const [showCancel, setShowCancel] = useState<boolean>(false)
  const [, setOpen] = useState<boolean>(true)
  const [Type] = useState<string>('buy')

  const [status, setStatus] = useState<string>('')
  const [usdc] = useState<string>('')
  const [search, setSearch] = useState('')
  const [product, setProduct] = useState<any>({})

  const [, setPopular] = useState<IPopular>()

  useEffect(() => {
    // const lang = sessionStorage.getItem('language') || 'en'
    // i18n.changeLanguage(lang)
    fetchPopular()
    if (isEmptyObject(router.query?.id) && router.query?.id) {
      fetchNftDetailById(Number(router.query?.id))
    }
  }, [router.query?.id])

  useEffect(() => {
    if (isPopular?.popular?.length === 1) {
      setPopular(isPopular?.popular[0])
    }
  }, [isPopular?.popular])

  useEffect(() => {
    getDataDetail()
  }, [])

  const getDataDetail = async () => {
    const productId = sessionStorage.getItem('detail') || ''
    const products = await api.product_detail(productId)
    console.log('PRODUCTS >>>', products?.data?.data?.products?.attributes)
    if (products?.data?.success) {
      setProduct(products?.data?.data?.products?.attributes)
    }
    if (!products?.data?.success) {
      setProduct('')
    }

    return products
  }

  console.log('config', config?.api)

  console.log('url', config?.api + product?.Media?.data[0]?.attributes?.url)

  /* @API: fetch fetchNft detail by id */
  const fetchNftDetailById = async (id: number) => {
    await dispatch(getPopularById(id))
  }

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
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
    setShowModalSell(false)
    setShowCancel(false)
  }

  const handleShowModal = () => {
    setStatus('success')
    if (status) {
      setShowModal(false)
      setStatus('')
    }
  }

  const handleCancel = () => {
    setShowCancel(true)
  }

  const handleRouter = () => {
    router.back()
  }

  /* @API: fetch search */
  const fetchSearch = async () => {
    console.log('fetch search', search)
  }

  if (isPopular.loading || isRelated.loading) return <span>loading...</span>
  if (isPopular.error || isRelated.error) return <span>{isPopular.error || isRelated.error}</span>

  // return <div>NFT Page {popular?.id} : {popular?.collectionName}</div>
  return (
    <>
      <>
        {showModalSell ? (
          <ModalSell
            title='List item for sale'
            setShowModal={handleShowModalSell}
            HandleClose={handleClose}
            button_enter='Confirm to place your bid'
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
        ) : null}
      </>
      <>
        {showCancel ? (
          <Modal
            modal={MODAL_TYPE.ALERT}
            title='Buy Now'
            subtitle1='If you confirm to continue, your listing will be cancelled.'
            subtitle2='And those service charges will not be returned.'
            setShowModal={handleShowModal}
            state={search}
            setState={setSearch}
            handleClicked={() => fetchSearch()}
            HandleClose={handleClose}
            handleRouter={handleRouter}
          />
        ) : null}
      </>
      <div className='grid grid-flow-row-dense grid-cols-2 grid-rows-2 flex-wrap w-full'>
        <div className='w-full'>
          <div
            style={{
              flex: 1,
              display: 'flex',
              resize: 'none',
              backgroundImage: `url(${config?.api}${'/'}${product?.Media?.data[0]?.attributes?.url}`,
            }}
            className='bg-placeholder flex m-3 h-[32rem] rounded-[20px] items-center justify-center'
          ></div>
        </div>
        <div className='w-full'>
          <div className='flex m-3 h-[20rem] rounded-[20px] flex-col'>
            <div className='text-bluePrimary'>creator {product?.Title_English}</div>
            <div className='text-bluePrimary text-xl text-white'>NFT Name #{product?.NFT_Attributes?.id}</div>
            <div className='py-10 mb-5'>Own by ABC</div>

            <div>Current Price</div>
            <div className='flex flex-rows items-center'>
              <ICon name='ethereum' color='#00E0FF' size='lg' />
              <div className='text-bluePrimary text-xl text-white ml-3'>{product?.Quantity} ETH (XXX NGP)</div>
            </div>
            <div className='flex flex-rows mt-5'>
              <Button
                handlerClicked={() => setShowModalSell(true)}
                classed='bg-bluePrimary text-black border-none w-48 rounded-md rounded-[30px] mr-3'
              >
                Sell
              </Button>
              <Button
                handlerClicked={() => handleCancel()}
                classed='bg-transparent text-white w-48 border border-white rounded-md rounded-[30px]'
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className='bg-placeholder flex m-3 h-[11rem] rounded-[20px] relative flex-col'>
            <div className='p-4 text-md absolute top-0 left-0'>Bid Status</div>
            <div className='flex flex-row w-full justify-around h-full relative items-center'>
              <h4 className='text-white'>0x123456abcde</h4>
              <h4 className='text-white'>USDC 2.55</h4>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-placeholder flex m-3 h-[32rem] rounded-[20px] justify-center'>
            <div className='mt-5 text-white'>{product?.Description_English}</div>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-placeholder flex m-3 h-[15.5rem] rounded-[20px] justify-center items-center'>Listing</div>
          <div className='bg-placeholder flex m-3 h-[15.5rem] rounded-[20px] justify-center items-center'>Offer</div>
        </div>
      </div>
      <div className='w-full'>
        <div className='bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>History</div>
      </div>
      <div className='w-full flex flex-col mt-10'>
        <Title
          title={TITLE_TYPE.TITLE_SEE}
          header='Related NFTs'
          total={isRelated.total}
          handlerClicked={() => {}}
          classed='text-3xl'
        />
        <div className='flex flex-wrap'>
          {isRelated?.related.map((trend: any, index: number) => (
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
        {showModal ? (
          <>
            {Type !== 'buy' ? (
              <Modal
                title='Buy Now'
                subtitle='You are about to place a bid for land123 by New Galaxy'
                setShowModal={handleShowModal}
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
                HandleClose={handleClose}
              />
            ) : (
              <Modal
                title='Place a bid'
                subtitle='You are about to place a bid for land123 by New Galaxy'
                setShowModal={handleShowModal}
                bid='Your bid'
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
                HandleClose={handleClose}
              />
            )}
          </>
        ) : null}
      </div>
    </>
  )
}
