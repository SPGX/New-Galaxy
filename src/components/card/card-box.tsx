import { Fragment, ReactElement } from 'react'

import Image from '@/components/image'
import Button from '@/components/button'

interface IProps {
  header: string
  subHeader?: string
  description?: string[]
  buttons: any[]
  image: string
  classed?: string
}

export default function CardBox({ header, subHeader, description, image, classed, buttons }: IProps): ReactElement {
  return (
    <div
      className={
        'w-full flex rounded-2xl py-10 px-10  md:py-10 md:px-10 lg:py-4 lg:px-10 xl:py-4 xl:px-10 ' +
        (classed ? classed : 'bg-white')
      }
    >
      <div className='w-full xl:max-w-6xl flex items-center justify-center'>
        <div className='w-1/1 md:w-4/6 pr-10'>
          <div className='mb-8'>
            <h1 className='font-normal text-gray-300 text-3xl'>{header}</h1>
            <h1 className='font-bold text-white uppercase text-4xl mb-3'>{subHeader}</h1>
            {description?.map((desc, index) => (
              <Fragment key={index}>
                <span className='text-sm text-white'>{desc}</span>
                <br />
              </Fragment>
            ))}
          </div>
          <div className='flex flex-rows'>
            {buttons?.map((button, index) => (
              <div className='inline-block align-bottom mr-5 last:mr-0' key={index}>
                <Button classed={button.classed}>
                  <span className='text-xs'>{button.text}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/1 md:w-2/6 flex justify-center '>
          <Image src={image} classed='relative' width='100%' height='auto' alt='custom' />
        </div>
      </div>
    </div>
  )
}
