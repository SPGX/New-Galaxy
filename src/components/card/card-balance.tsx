import { ReactElement, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import ICon from '@/components/icon'
import Button from '@/components/button'
import { BUTTON_TYPE } from '@/shared/enum/button'

interface IProps {
  backgroundUrl?: string
  cards: any[]
  handlerClicked: () => void
  type: string
}

export default function CardBalance({ backgroundUrl, cards, handlerClicked, type }: IProps): ReactElement {

  const { t, i18n } = useTranslation()


  useEffect(() => {
    const lang = sessionStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
  }, [])

  return (
    <div
      className='flex flex-col justify-center items-center w-full bg-white p-4 rounded-md'
      style={{
        backgroundImage: `url(${backgroundUrl || ''})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        background: 'linear-gradient(112.33deg, #00D6F1 0.01%, #007CC2 115.99%)',
        borderRadius: '30px',
      }}
    >
      {cards?.map((card, index) => (
        <div key={index} className='flex flex-col justify-center items-center w-full pb-4 last:pb-0'>
          {type === 'right' ? (
            <h6 className='text-white font-normal text-xs tracking-tight mb-2'>{t(card.title)}</h6>
          ) : (
            <h6
              className={
                index === 0 ? 'font-semibold text-white text-2xl pl-2' : 'text-white font-normal text-xs tracking-tight mb-2'
              }
            >
              {t(card.title)}
            </h6>
          )}
          <div className='flex justify-center items-center w-full'>
            <ICon name='ethereum' color='#fff' size='lg' />
            <span
              className={
                type === 'right' || index === 1
                  ? 'text-white font-normal text-white text-2xl pl-2'
                  : 'font-semibold text-white text-2xl pl-2'
              }
            >
              {card.price}
            </span>
          </div>
        </div>
      ))}
      <div className='flex justify-center items-center w-full'>
        {type === 'right' ? (
          <Button
            classed='cursor-pointer border bg-white px-2 rounded-full'
            button={BUTTON_TYPE.TOP_UP_BALANCE}
            handlerClicked={() => handlerClicked()}
          >
            <div className='flex justify-center items-center'>
              <div className='bg-blue-700 w-6 h-6 rounded-full cursor-pointer'>
                <ICon name='plus' color='#fff' size='xs' />
              </div>
              <span className='capitalize text-xs text-black font-semibold px-8'>top up balance</span>
              <ICon name='chevron-right' color='#808080' size='xs' />
            </div>
          </Button>
        ) : (
          <>
            <div className='flex justify-center items-center w-full flex-col'>
              <h6 className='text-white font-normal text-xs tracking-tight mb-2'>NGP Points</h6>
              <div className='flex flex-row items-center'>
                <div style={{ color: '#fff', fontSize: '30px' }}>©</div>
                <div className='font-semibold text-white text-2xl pl-2'>999</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
