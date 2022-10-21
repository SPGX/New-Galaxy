import { ReactElement, useState, useEffect } from 'react'

interface IProps {
  items: any[]
  handlerClicked: (item: string) => void
}

export default function Tags({ items, handlerClicked }: IProps): ReactElement {
  const [activeTag, setActiveTag] = useState<string>('')

  useEffect(() => {
    if (items?.length > 0) {
      handleActiveTag(items[0])
    }
  }, [items])

  /* @Function: input on change */
  const handleActiveTag = (name: string) => {
    setActiveTag(name)
    handlerClicked(name)
  }

  return (
    <>
      {items?.map((item, index) => (
        <div key={index} className='flex item-center mr-2 mb-2'>
          <div
            className={
              'focus:outline-none focus:shadow-outline border-2 text-sm rounded-full px-4 py-1 cursor-pointer flex item-center ' +
              (activeTag === item ? 'bg-cyan-500 text-white border-cyan-500' : 'bg-transparent text-grey-900 border-gray-900')
            }
            onClick={() => handleActiveTag(item)}
          >
            <span className='text-xs'>{item.title}</span>
          </div>
        </div>
      ))}
    </>
  )
}
