import { ReactElement } from 'react'

import ICon from '@/components/icon'

interface IProps {
  message: string
}

export default function WarningApi({ message }: IProps): ReactElement | null {
  return (
    <div className='flex item-center justify-start bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700 my-4'>
      <ICon name='info-circle' size='lg' color='#dc3545' />
      <div className='pl-2'>
        <span className='font-medium text-xs'>{message}!</span>
      </div>
    </div>
  )
}
