import { ReactElement, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ISubMenu {
  subId: number
  path: string
  name: string
  icon: string | null
}

interface IProps {
  isOpen: boolean
  subMenus: ISubMenu[]
  handleSubMenuToggle: (status: boolean) => void
  isPath: (path: string) => void
}

export default function Submenu({ isOpen, handleSubMenuToggle, subMenus, isPath }: IProps): ReactElement | null {
  const subMenuRef: any = useRef(null)
  const [isActiveSubMenu, setIsActiveSubMenu] = useState<string>('')
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const lang = sessionStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
  }, [])

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (
        subMenuRef?.current !== null &&
        !subMenuRef?.current?.contains(e.target) &&
        subMenuRef?.current?.id !== e?.target?.id
      ) {
        handleSubMenuToggle(!isOpen)
      }
    }

    if (isOpen) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isOpen])

  useEffect(() => {
    const location = localStorage.getItem('location')
    if (location) setIsActiveSubMenu(location)
  }, [])

  /* @Function: handle active sub menu */
  const handleActiveSubMenu = (path: string) => {
    setIsActiveSubMenu(path)
  }

  if (!isOpen) return null

  return (
    <div id='menu-name' className='w-full my-4 pl-10 flex item-center' ref={subMenuRef}>
      <div className=' border-l border-gray-500 '>
        {subMenus?.map((sub, index) => (
          <div
            onClick={() => {
              isPath(sub.path), handleActiveSubMenu(sub.path), handleSubMenuToggle(false)
            }}
            key={index}
            className='w-full pl-4 py-1'
          >
            <div
              className={
                'p-2 flex items-start rounded-lg cursor-pointer ' + (isActiveSubMenu === sub.path ? 'text-main' : 'text-white')
              }
            >
              <i className={'galaxy-icon path2 path1 path3 text-xl ' + sub.icon} />
              <span className='text-sm font-medium  pl-4'>{t(sub.name)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
