import { ReactElement } from 'react'

import Balance from '@/constants/drawer/balance'
import TopCreators from '@/constants/drawer/top-creators'

interface IProps {}

export default function Drawer({}: IProps): ReactElement {
  return (
    <div className='flex flex-col w-full mr-1'>
      <Balance type={'right'}  />
      <TopCreators />
    </div>
  )
}
