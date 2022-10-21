import { ReactElement } from 'react'

import { TITLE_TYPE } from '@/shared/enum/title.enum'

interface IProps {
  title: string
  header: string
  // subHeader?: string
  total?: number
  handlerClicked: () => void
  classed?: string
}

export default function Title({ title, header, total, handlerClicked, classed }: IProps): ReactElement {
  switch (title) {
    case TITLE_TYPE.TITLE_SEE:
      return (
        <div className='flex justify-between items-center mb-3'>
          <div className='flex'>
            <h3 className={'font-semibold leading-none capitalize text-white ' + classed}>{header}</h3>
            {/* {console.log(subHeader)} */}
          </div>

          <div className='flex'>
            {total && <span className='text-xs font-normal text-gray-500 hover:underline pr-10'>{total} items</span>}
            <span className='text-xs font-medium text-main hover:underline dark:text-blue-500 cursor-pointer' onClick={() => handlerClicked()}>
              See all
            </span>
          </div>
        </div>
      )
    case TITLE_TYPE.TITLE_NO_SEE:
      return (
        <div className='flex justify-center items-center mb-3'>
          <div className='flex'>
            <h3 className={'font-semibold leading-none capitalize text-white ' + classed}>{header}</h3>
            {/* {console.log(subHeader)} */}
          </div>
        </div>
      )
    default:
      return <h4 className={'w-full py-2 leading-none focus:outline-none pb-4 ' + classed}>{header}</h4>
  }
}
