import { Fragment, ReactElement, useEffect, useState } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllPopular } from '@/store/popular-collection/actions'

import { useRouter } from 'next/router'

import Title from '@/components/header/title'
import CardPlan from '@/components/card/card-plan'
import Modal from '@/components/modal'

import { TITLE_TYPE } from '@/shared/enum/title.enum'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

import { useTranslation } from 'react-i18next'

interface IProps {}

export default function PopularCollection({}: IProps): ReactElement {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const { popular, loading, error } = useTypedSelector((state) => state.popular)
  const router = useRouter()
  const [showModal, setShowModal] = useState<boolean>(false)
  const [Open, setOpen] = useState<boolean>(true)
  const [Type] = useState<string>('buy')
  const [status, setStatus] = useState<string>('')

  const [usdc] = useState<string>('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const lang = sessionStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
    fetchPopular()
  }, [])

  /* @API: fetch all popular */
  const fetchPopular = async () => {
    await dispatch(getAllPopular())
  }

  /* @Function: handler buy collection */
  const handlerBuyCollection = async (id: number) => {
    // console.log('showModal', showModal)
    if (Open === true) {
      router.push(`/detail/${id}`)
    }
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
    console.log('fetch search', search)
  }

  if (loading) return <LoadingApi />
  if (error) return <WarningApi message={error} />

  return (
    <div className='w-full py-10'>
      <Title title={TITLE_TYPE.TITLE_SEE} header={t('popular nfts')} handlerClicked={fetchPopular} classed='text-3xl' />
      <div className='w-full flex flex-col'>
        <div className='flex flex-wrap'>
          {popular?.map((trend, index) => (
            <Fragment key={index}>
              <CardPlan
                item={trend}
                priceName='Current Bids:'
                isButton={true}
                buttonName={t('buy now')}
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
            {Type === 'buy' ? (
              <Modal
                title={t('buy now')}
                subtitle='You are about to place a bid for land123 by New Galaxy'
                setShowModal={handleShowModalSell}
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
                setShowModal={handleShowModalSell}
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
    </div>
  )
}
