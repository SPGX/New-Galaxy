import { ReactElement, ReactNode, useState } from 'react'

import SidebarNavigation from '@/constants/sidebar-navigation'
import Navbar from '@/constants/navbar'
import Drawer from '@/constants/drawer'

// import { verifyNavigationPathName } from '@/helper/navigation'
import SidebarNavigationMenu from '@/shared/json/sidebar-navigation-menu.json'

interface IProps {
  children: ReactNode
}

export default function Layout({ children }: IProps): ReactElement {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  /* @Function: handle open sidebar */
  const handleOpenSidebar = (): void => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  return (
    <div className='m-0 font-sans antialiased font-normal text-size-base leading-default bg-main h-full text-slate-500'>
      <SidebarNavigation
        isOpen={isOpenSidebar}
        handleOpenSidebar={() => handleOpenSidebar()}
        handleNav={() => {}}
        navigation={SidebarNavigationMenu}
      />
      <main className='relative h-screen max-h-screen transition-all duration-200 ease-in-out xl:ml-68'>
        {/* <main className='relative h-screen max-h-screen transition-all duration-200 ease-in-out xl:ml-68 pl-4 pr-8 rounded-xl'> */}
        <Navbar handleOpenSidebar={() => handleOpenSidebar()} handleNavigate={() => {}} />
        <div className='px-1 py-2 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start'>
          <div className='flex items-start justify-between w-full py-1 mx-auto flex-wrap-inherit'>
            <div className='w-full pr-2 pl-2'>{children}</div>
            <div className='w-auto flex sticky top-24'>
              <Drawer />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
