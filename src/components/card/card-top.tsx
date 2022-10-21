import { ReactElement } from 'react'

import BackgroundImage from '@/components/image/background-image'
import Icon from '@/components/icon'
// import Button from '@/components/button'

interface IProps {
  item: any
  priceName: string
  isButton?: boolean
  buttonName?: string
  index: number
  handlerClicked?: () => void
}

export default function CardTop({ item, index }: IProps): ReactElement {
  return (
    <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/3 py-2 md:py-2 lg:py-2 xl:py-4 px-2 md:px-2 lg:px-2 xl:px-4 cursor-pointer'>
      <div
        className='flex flex-col bg-white  rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50'
        style={{
          // backgroundImage: `url(${item.background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          width: '100%',
          backgroundColor: '#1E293B',
        }}
      >
        <div className=' h-full flex flex-col justify-stretch'>
          <div className='flex flex-col py-4 px-4 backdrop-blur-md rounded-xl w-full'>
            <div className='flex items-center py-2 justify-between'>
              <>
                <span className='text-white font-semibold mr-3 text-xs'>{index + 1}</span>
                <BackgroundImage src={item.avatar} borderRadius='100%' />
                <div className='flex flex-col ml-3 self-center'>
                  <span className='text-white text-xs font-semibold'>
                    {item.name.length >= 10 && item.name.substring(0, 10) + '...'}
                  </span>
                  <span className='w-full py-0leading-none focus:outline-none text-xs text-gray-300 font-normal '>
                    {item.price}ETH
                  </span>
                </div>
                {item.line === 'up' ? (
                  <div className='border-b-2 border-b-green-400'>
                    <Icon name='line-up' color='rgba(52, 211, 153, 1)' size='lg' />
                  </div>
                ) : (
                  <div className='border-b-2 border-b-red-400'>
                    <Icon name='line-down' color='rgba(248, 113, 113, 1)' size='lg' />
                  </div>
                )}

                <div className='order-last'>
                  <span className='text-white text-xs'>+10.01% </span>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
