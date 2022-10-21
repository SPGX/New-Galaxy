import { ReactElement } from 'react'

import BackgroundImage from '@/components/image/background-image'
import Icon from '@/components/icon'
import config from '@/config/env'
// import Button from '@/components/button'

interface IProps {
  item: any
  priceName: string
  handlerClicked?: () => void
}

export default function CardExplore({ item, priceName, handlerClicked }: IProps): ReactElement {
  const ImageBg = config.api + item?.Image?.data?.attributes?.url
  const ImageAvatar = config.api + item?.Image?.data?.attributes?.formats?.thumbnail?.url
  return (
    <div
      // onClick={handlerClicked}
      className='w-full md:w-1/2 lg:w-1/3 xl:w-1/3 py-2 md:py-2 lg:py-2 xl:py-4 px-2 md:px-2 lg:px-2 xl:px-4 cursor-pointer'
    >
      <div
        className='flex flex-col bg-white  rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50'
        style={{
          backgroundImage: `url(${ImageBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '333px',
          width: '100%',
          backgroundColor: '#808080',
          position: 'relative',
        }}
      >
        <div
          onClick={handlerClicked}
          style={{ width: '100%', height: '80%', backgroundColor: 'transparent', position: 'absolute' }}
        />
        <div className=' h-full flex flex-col justify-stretch'>
          <div className='w-full flex justify-start items-start flex-1 p-6' />
          <div className='flex flex-col px-4 backdrop-blur-md bg-white/10 rounded-xl w-full'>
            <div className='flex justify-between'>
              <div>
                <span className='pl-4 text-gray-400'></span>
              </div>
              <div className='relative md:absolute -top-8 border-4 border-sky-500 rounded-[50px]'>
                <BackgroundImage width='75px' height='75px' src={ImageAvatar} borderRadius='100%' />
              </div>
              <div className='pt-3'>
                <Icon name='heart' color='#9ca3af' size='lg' />
                <span className='pl-2 text-gray-400'>1</span>
              </div>
            </div>
            <div className='flex items-center py-1 justify-center'>
              <div className='inline-flex flex items-center'>
                <span className='flex justify-center text-xl text-white font-semibold'>{item.TokenName}</span>
              </div>
            </div>
            <div className='flex justify-center mb-3'>
              <span className='py-2 leading-none focus:outline-none pb-4 text-md text-gray-300 font-normal drop-shadow-2xl'>
                {priceName} <Icon name='ethereum' color='#7E4CE3' size='lg' />
                <span className='pl-2 py-1 leading-none focus:outline-none pb-4 text-md text-white font-medium '>
                  {item.Quantity} ETH
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
