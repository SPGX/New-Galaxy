import { ReactElement, useEffect, useState } from 'react'

import NavMenu from '@/constants/sidebar-navigation/nav-menu'

interface IProps {
  navbarOpen: boolean
  navigationGroup: any[]
  isPath: (path: string) => void
}

export default function GroupMenu({ navigationGroup, navbarOpen, isPath }: IProps): ReactElement {
  const [isActiveGroup, setIsActiveGroup] = useState<string>('')

  useEffect(() => {
    // console.log("isActiveGroup", isActiveGroup);
    const isGroupLocation = localStorage.getItem('group-location')
    if (isGroupLocation) setIsActiveGroup(isGroupLocation)
  }, [])

  /* @Function: handle active group */
  const handleActiveGroup = (group: string) => {
    setIsActiveGroup(group)
  }

  return (
    <div className='items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full overflow-y-auto'>
      <ul className='flex flex-col pl-0 mb-0'>
        {navigationGroup.map((group) => (
          <li key={group.id} className='w-full py-3 border-t border-gray-800'>
            <NavMenu
              navbarOpen={navbarOpen}
              navigationNav={group.routes}
              isPath={isPath}
              groupLocation={group.name}
              isActiveGroup={isActiveGroup}
              handleActiveGroup={handleActiveGroup}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
