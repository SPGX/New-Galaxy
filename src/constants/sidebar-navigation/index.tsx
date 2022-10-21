import { ReactElement, useState } from 'react'
import { useRouter } from 'next/router'

import Banner from './banner'
import GroupMenu from './group-menu'

interface IProps {
  isOpen: boolean
  handleOpenSidebar: () => void
  handleNav: () => void
  navigation: any
}

export default function SidebarNavigation({ isOpen, navigation }: IProps): ReactElement {
  const router = useRouter()
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

  /* @Function: is path */
  const isPath = (path: string, group?: string): void => {
    if (path === '#') return
    localStorage.setItem('location', path)
    if (group) localStorage.setItem('group-location', group)
    setNavbarOpen(false)
    router.push(path)
    // console.log("navigation >>", navigation);
  }

  const handleNav = () => {
    router.push(`/`)
  }

  return (
    <aside
      className={
        'fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 antialiased transition-transform duration-200 -translate-x-full bg-side border-0 max-w-64 ease-nav-brand z-50  xl:translate-x-0' +
        (isOpen ? ' translate-x-0' : '')
      }
    >
      <Banner
        title='GALAXY NFTS'
        logo='data:image/png;base64,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'
        handleNav={() => handleNav()}
        handleOpenSidebar={() => {}}
      />
      <GroupMenu navbarOpen={navbarOpen} navigationGroup={navigation} isPath={isPath} />
    </aside>
  )
}
