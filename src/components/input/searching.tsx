import { ReactElement, FormEvent } from 'react'

import Icon from '@/components/icon'

interface IProps {
  state: string | undefined | number
  setState: (value: string | '') => void | any
  name: string
  placeholder?: string
  handleClicked: Function
  classed?: string
  icon?: string
  classX?: string
  type?: string
}

export default function Searching({
  state,
  setState,
  name,
  placeholder,
  handleClicked,
  classed,
  type,
}: IProps): ReactElement {
  /* @Function: input on change */
  const onChangeHandle = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setState(e.currentTarget.value.trim())
  }

  /* @Function: on enter searching */
  const onKeyDownHandle = (e: any) => {
    if (e.key === 'Enter') handleClicked()
  }

  return (
    <>
      {type === 'nav' ? (
        <div className='relative rounded text-gray-600 focus-within:text-gray-400 w-full sm:max-w-lg md:max-w-md lg:max-w-xl w-full'>
          <input
            type='search'
            id={name}
            name={name}
            value={state}
            className={
              'h-9 w-full text-sm text-gray-400 rounded-2xl pl-10 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white ' +
              classed
            }
            onChange={(e) => onChangeHandle(e)}
            onKeyPress={(e) => onKeyDownHandle(e)}
            placeholder={`${placeholder}`}
          />
          <span className='absolute flex items-center pl-2 inset-y-0 left-0'>
            <button
              type='button'
              className='p-1 focus:outline-none focus:shadow-outline left-0'
              onClick={() => handleClicked()}
            >
              <Icon name='search' color='#808080' />
            </button>
          </span>
        </div>
      ) : (
        <div className='relative rounded text-gray-600 focus-within:text-gray-400 w-full sm:max-w-lg md:max-w-md lg:max-w-xl w-full'>
          <input
            type='search'
            id={name}
            name={name}
            value={state}
            className={
              'h-9 w-full text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white ' +
              classed
            }
            onChange={(e) => onChangeHandle(e)}
            onKeyPress={(e) => onKeyDownHandle(e)}
            placeholder={`${placeholder}`}
          />
          <span className='absolute flex items-center pl-2 inset-y-0 right-5'>
            <button
              type='button'
              className='p-1 focus:outline-none focus:shadow-outline right-0'
              onClick={() => handleClicked()}
            >
              <Icon name='search' color='#808080' />
            </button>
          </span>
        </div>
      )}
    </>
  )
}
