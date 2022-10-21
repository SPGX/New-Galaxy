import { ReactElement } from 'react'
import Link from 'next/link'

import Image from '@/components/image'
import ICon from '@/components/icon'

interface IProps {
  title?: string
  logo?: string
  handleOpenSidebar: () => void
  handleNav?: () => void
}

export default function Banner({ title, logo, handleOpenSidebar, handleNav }: IProps): ReactElement {
  const TemplateToggleX = (
    <button
      className='absolute top-0 right-0 p-4 cursor-pointer text-slate-400 black-white cursor-pointer icon-md my-1 leading-none py-1 xl:hidden outline-none focus:outline-none content-end ml-auto'
      type='button'
      aria-label='button'
      onClick={() => handleOpenSidebar()}
    >
      <ICon name='close' color='#fff' />
    </button>
  )

  if (logo) {
    return (
      <div className='h-auto'>
        {TemplateToggleX}
        <div className='block px-4 text-size-sm whitespace-nowrap text-slate-700'>
          <div className='flex flex-row items-center justify-center'>
            <div onClick={handleNav} className='w-full px-2 py-8 cursor-pointer'>
              <Image src={logo} alt={title} width='100%' height='auto' />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='h-auto'>
      {TemplateToggleX}
      <div className='flex justify-center px-4 pt-7 pb-3 m-0 text-size-sm whitespace-nowrap text-slate-700 w-full'>
        <Link href='/'>
          <span className='ml-1 text-md font-semibold transition-all duration-200 ease-nav-brand font-extrabold'>{title}</span>
        </Link>
      </div>
    </div>
  )
}
