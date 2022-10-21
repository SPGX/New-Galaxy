import { ReactElement } from 'react'

import BackgroundImage from '@/components/image/background-image'
import Title from '@/components/header/title'

import { TITLE_TYPE } from '@/shared/enum/title.enum'

interface IProps {
  title: string
  cards: any[]
  handlerClicked: () => void
}

export default function CardList({ title, cards, handlerClicked }: IProps): ReactElement {
  return (
    <div className='w-full py-10'>
      <Title title={TITLE_TYPE.TITLE_SEE} header={title} handlerClicked={handlerClicked} classed='text-xl' />
      <div className='flow-root bg-placeholder rounded-2xl px-4 py-2'>
        <ul>
          {cards?.map((card, index) => (
            <li className='py-3 flex items-center justify-start w-full' key={index}>
              <div className='flex items-center space-x-4 w-full'>
                <div className='inline-flex items-center text-xs font-medium text-white'>{index + 1}</div>
                <div className='flex-shrink-0'>
                  <BackgroundImage src={card.avatar} width='40px' height='40px' borderRadius='100%' />
                </div>
                <div className='flex flex-col min-w-0'>
                  <span className='text-sm font-normal text-white truncate'>{card.name}</span>
                  <span className='text-gray-500 truncate dark:text-gray-400' style={{ fontSize: 11 }}>
                    {card.price}
                    {card.type}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
