import { ReactElement, useState, useEffect } from 'react'
import styled from 'styled-components'

import SubMenu from '@/constants/sidebar-navigation/sub-menu'
import { useTranslation } from 'react-i18next'

export const ActiveSide = styled.div`
  position: absolute;
  left: 91%;
  right: 0;
  top: 12.49%;
  bottom: 84.88%;
  background: linear-gradient(112.33deg, #00f0ff 9.07%, #007cc2 115.99%);
  border-radius: 10px 0px 0px 10px;
  padding: 25px 0px;
`

interface IProps {
  navbarOpen: boolean
  navigationNav: any[]
  isPath: (path: string, group?: string) => void
  groupLocation: string
  isActiveGroup: string
  handleActiveGroup: (group: string) => void
}

export default function NavMenu({
  navigationNav,
  isPath,
  groupLocation,
  isActiveGroup,
  handleActiveGroup,
}: IProps): ReactElement {
  const [isActiveNav, setIsActiveNav] = useState<string>('')
  const [isActiveSubMenu, setIsActiveSubMenu] = useState<string>('A1')
  const [isOpenSubMenu, setIsOpenSubMenu] = useState<boolean>(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const location = localStorage.getItem('location')
    if (location) setIsActiveNav(location)
  }, [])

  useEffect(() => {
    const lang = sessionStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
  }, [])

  /* @Function: toggle sub menu */
  const handleSubMenuToggle = (status: boolean) => {
    setIsOpenSubMenu(status)
  }

  /* @Function: handle nav menu */
  const handleNavMenu = (nav: object | any): void => {
    // console.log('nav >>>', nav.id)
    if (!nav) setIsOpenSubMenu(false)
    isPath(nav.path, groupLocation)
    handleActiveNav(nav.id)
    handleSubMenuActive(nav.id, isBoolean(nav.subMenu))
    handleActiveGroup(groupLocation)
  }

  /* @Function: toggle sub active */
  const handleSubMenuActive = (id: string, isSub: boolean) => {
    if (isSub && id === isActiveSubMenu && isOpenSubMenu) {
      setIsOpenSubMenu(false)
    } else if (isSub && id === isActiveSubMenu && !isOpenSubMenu) {
      setIsOpenSubMenu(true)
    } else if (isSub && id !== isActiveSubMenu) {
      setIsOpenSubMenu(true)
    } else {
      setIsOpenSubMenu(false)
    }
    setIsActiveSubMenu(id)
  }

  /* @Function: handle active */
  const handleActiveNav = (id: string) => {
    // console.log('handleActiveNav >>>', id)
    setIsActiveNav(id)
  }

  /* @Function: is boolean */
  const isBoolean = (data: any): boolean => {
    return data?.length > 0
  }

  return (
    <>
      {navigationNav.map((nav: any) => (
        <div key={nav.id} className='mt-0.5 w-full'>
          <div
            className={
              'relative pl-10 pt-6 py-4 flex items-center space-x-4 rounded-l-lg from-sky-600 to-cyan-400 cursor-pointer ' +
              (isActiveNav === nav.id && isActiveGroup === groupLocation ? 'text-main' : 'text-white')
            }
            onClick={() => handleNavMenu(nav)}
          >
            <i className={'galaxy-icon path2 path1 path3 text-xl ' + nav.icon} />
            <span className='duration-300 opacity-100 pointer-events-none ease text-sm'>{t(`${nav.name}`)}</span>
            {isActiveNav === nav.id && isActiveGroup === groupLocation && <ActiveSide />}
          </div>

          <SubMenu
            isOpen={isActiveSubMenu === nav.id && isOpenSubMenu}
            subMenus={nav.subMenu}
            isPath={isPath}
            handleSubMenuToggle={handleSubMenuToggle}
          />
        </div>
      ))}
    </>
  )
}
