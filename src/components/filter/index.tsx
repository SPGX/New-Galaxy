import { ReactElement, useState } from 'react'
import Icon from '@/components/icon'

interface IProps {
  items: any[]
}

export default function Filter({ items }: IProps): ReactElement {
  const [activeFilter, setActiveFilter] = useState<boolean>()

  /* @Function: input on change */
  const handleActiveFilter = () => {
    setActiveFilter(!activeFilter)
  }

  return (
    <>
      <div className='cursor-pointer text-white' onClick={() => handleActiveFilter()}>
        Filter <Icon name='down' color='#00BCD9' size='lg' />
      </div>
      {activeFilter && (
        <div className='w-full justify-between bg-placeholder cursor-pointer flex flex-row p-5 rounded-md'>
          {items?.map((item, index) => (
            <div key={index} className='flex item-center mr-2 mb-2 flex-row'>
              <div className='flex flex-col text-white'>
                Status
                <span className='text-md ml-5'>{item.status.title}</span>
                {item.status.map((row: any, key: number) => (
                  <div key={key}>
                    <span className='text-sm ml-5 w-full mr-6'>{row.title}</span>
                    <input type='checkbox' className='appearance-none indeterminate:bg-gray-300 ...' />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
