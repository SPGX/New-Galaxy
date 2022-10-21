import { ReactElement } from 'react'
// import Icon from '@/components/icon'

import Sort from '@shared/json/sort.json'

interface IProps {
  items: any[]
}

export default function Dropdown({ items }: IProps): ReactElement {
  // const [activeFilter, setActiveFilter] = useState<boolean>()

  /* @Function: input on change */
  // const handleActiveFilter = () => {
  //   setActiveFilter(!activeFilter)
  // }

  return (
    <>
      {items.length > 0 ? (
        <select>
          <option>Sort</option>
          {items.map((item: any, index: number) => (
            <option key={index} value='fruit'>
              {item?.name}
            </option>
          ))}
        </select>
      ) : (
        <select
          style={{
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: 50,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 7,
            paddingBottom: 7,
            fontSize: '13px',
            marginRight: '2px',
          }}
        >
          <option>Sort</option>
          {Sort.map((item: any, index: number) => (
            <option key={index} value='fruit'>
              {item?.name}
            </option>
          ))}
        </select>
      )}
    </>
  )
}
