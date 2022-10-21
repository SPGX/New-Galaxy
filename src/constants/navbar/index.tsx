import { ReactElement, useState, useEffect } from 'react'

import Searching from '@/components/input/searching'
import Icon from '@/components/icon'
import BackgroundImage from '@/components/image/background-image'
import { useRouter } from 'next/router'

import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

interface IProps {
  handleOpenSidebar: Function
  handleNavigate: Function
}

export default function Navbar({ handleOpenSidebar }: IProps): ReactElement {
  const { t, i18n } = useTranslation()
  const [search, setSearch] = useState<string>('')
  const router = useRouter()
  const [token, setToken] = useState<string>('')

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      const TK = sessionStorage.getItem('token') || ''
      setToken(TK)
    } else {
      setToken('')
    }
  }, [sessionStorage.getItem('token'), token])

  /* @API: fetch search */
  const fetchSearch = async () => {
    console.log('fetch search')
  }

  const handleNavigate = (item: any) => {
    if (item === '/profile') {
      localStorage.setItem('locationNav', item)
      router.push(`/profile`)
    }
    if (item === '/wallet') {
      localStorage.setItem('locationNav', item)
      router.push(`/wallet`)
    }
    if (item === '/settings') {
      localStorage.setItem('locationNav', item)
      router.push(`/settings`)
    }
    if (item === '/logout') {
      localStorage.setItem('locationNav', item)
      sessionStorage.removeItem('token')
      // router.push(`/login`)
      setToken('')
    }
  }

  /* @component: toggle sidebar */
  const ToggleSidebar = (
    <div className='flex justify-end pl-0 mb-0 list-none md-max:w-auto pl-2'>
      <div className='flex items-center xl:hidden cursor-pointer' onClick={() => handleOpenSidebar()}>
        <div className='block p-0 text-white transition-all ease-nav-brand text-size-sm'>
          <div className='w-4.5 overflow-hidden'>
            <i className='ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all'></i>
            <i className='ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all'></i>
            <i className='ease relative block h-0.5 rounded-sm bg-white transition-all'></i>
          </div>
        </div>
      </div>
    </div>
  )

  const DropDownListContainer = styled('div')``

  const DropDownList = styled('ul')`
    padding: 0;
  `

  const handleLanguage = (key: string) => {
    i18n.changeLanguage(key)
    sessionStorage.setItem('language', key)
  }

  const [isOpen, setIsOpen] = useState(false)
  const [isLang, setIsLang] = useState(false)
  const [isNotify, setIsNotify] = useState(false)
  const toggling = () => setIsOpen(!isOpen)
  const toggleLang = () => setIsLang(!isLang)
  const toggleNotify = () => setIsNotify(!isNotify)

  return (
    <>
      <div className='sticky top-0 z-10 backdrop-filter backdrop-blur dark:bg-primary dark:text-white'>
        <nav className='relative w-full flex flex-wrap items-center justify-between px-0 py-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start'>
          <div className='flex w-full justify-center items-center'>
            <div className='grow w-full flex justify-center pr-10'>
              <Searching
                state={search}
                setState={setSearch}
                name='search'
                placeholder='Search'
                handleClicked={() => fetchSearch()}
                classed='bg-placeholder border-none'
                type='nav'
              />
            </div>
            <div className='flex flex-row items-center w-[30%] ml-0'>
              <div onClick={toggleLang} className='flex cursor-pointer items-center'>
                <Icon name='earth-americas' color='#fff' size='lg' />
                <div style={{ marginLeft: 5, fontSize: '14px' }}>{t('language')}</div>
                <div style={{ position: 'absolute', bottom: -83 }}>
                  {isLang && (
                    <DropDownListContainer>
                      <DropDownList>
                        <div
                          style={{
                            backgroundColor: 'rgba(72,85,105,1)',
                            width: '100px',
                            borderRadius: 10,
                            paddingLeft: 5,
                            paddingRight: 5,
                            paddingTop: 5,
                            paddingBottom: 5,
                          }}
                        >
                          <div
                            onClick={() => handleLanguage('en')}
                            className='cursor-pointer hover:text-bluePrimary'
                            style={{ marginLeft: 8, paddingTop: 10 }}
                          >
                            English
                          </div>
                          <div
                            onClick={() => handleLanguage('sc')}
                            className='cursor-pointer hover:text-bluePrimary'
                            style={{ marginLeft: 8 }}
                          >
                            繁體中文
                          </div>
                          <div
                            onClick={() => handleLanguage('tc')}
                            className='cursor-pointer hover:text-bluePrimary'
                            style={{ marginLeft: 8, marginBottom: 5 }}
                          >
                            简体中文
                          </div>
                        </div>
                      </DropDownList>
                    </DropDownListContainer>
                  )}
                </div>
                <div className='cursor-pointer items-center flex ml-2 mr-3'>
                  {!isLang ? (
                    <Icon name='chevron-down' color='#fff' size='sm' />
                  ) : (
                    <Icon name='chevron-up' color='#fff' size='sm' />
                  )}
                </div>
              </div>
              <div onClick={toggleNotify} className='flex cursor-pointer'>
                <div style={{ position: 'relative', marginLeft: 5 }}>
                  <Icon name='bell' color='#00BCD9' size='lg' />
                  <div
                    style={{
                      position: 'absolute',
                      top: -4,
                      right: -8,
                      backgroundColor: 'red',
                      borderRadius: 50,
                      fontSize: '7px',
                      width: '15px',
                      height: '15px',
                      justifyContent: 'center',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div>0</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: -57 }}>
                  {isNotify && (
                    <DropDownListContainer>
                      <DropDownList>
                        <div
                          style={{
                            backgroundColor: 'rgba(72,85,105,1)',
                            width: '100px',
                            borderRadius: 10,
                            paddingLeft: 13,
                            paddingRight: 5,
                            paddingTop: 5,
                            paddingBottom: 5,
                          }}
                        >
                          <div
                            className='cursor-pointer hover:text-bluePrimary'
                            style={{ marginLeft: 8, paddingTop: 20, paddingBottom: 20 }}
                          >
                            Empty
                          </div>
                        </div>
                      </DropDownList>
                    </DropDownListContainer>
                  )}
                </div>
              </div>
              <div className='flex flex-row items-center px-6'>
                <div className='pr-2'>
                  <BackgroundImage
                    src={
                      sessionStorage.getItem('token')
                        ? 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        : 'https://www.panelplus.co.th/uploads/collection/ca95a-white-mk630n.jpg'
                    }
                    height='35px'
                    width='35px'
                    borderRadius='100%'
                  />
                </div>

                <div onClick={() => (token ? toggling() : '')} className='w-full flex flex-row item-start'>
                  <div className='w-full flex flex-col'>
                    {token ? (
                      <>
                        <span className='text-xs text-white font-medium'>Jack Arman</span>
                        {/* <span className='text-gray-400' style={{ fontSize: '11px' }}>
                          @Jackjack
                        </span> */}
                      </>
                    ) : (
                      <>
                        <span onClick={() => router.push(`/login`)} className='text-xs text-white font-medium cursor-pointer'>
                          Login
                        </span>
                      </>
                    )}
                  </div>
                  <div style={{ position: 'absolute', bottom: -120 }}>
                    {isOpen && (
                      <DropDownListContainer>
                        <DropDownList>
                          <div
                            style={{
                              backgroundColor: 'rgba(72,85,105,1)',
                              width: '100px',
                              borderRadius: 10,
                              paddingLeft: 5,
                              paddingRight: 5,
                              paddingTop: 5,
                            }}
                          >
                            <div
                              onClick={() => handleNavigate('/profile')}
                              className='cursor-pointer hover:text-bluePrimary'
                              style={{ marginLeft: 8, paddingTop: 10 }}
                            >
                              {t('profile')}
                            </div>
                            <div
                              onClick={() => handleNavigate('/wallet')}
                              className='cursor-pointer hover:text-bluePrimary'
                              style={{ marginLeft: 8 }}
                            >
                              {t('wallet')}
                            </div>
                            <div
                              onClick={() => handleNavigate('/settings')}
                              className='cursor-pointer hover:text-bluePrimary'
                              style={{ marginLeft: 8, marginBottom: 5 }}
                            >
                              {t('settings')}
                            </div>
                            <div
                              className='cursor-pointer hover:text-bluePrimary'
                              style={{ width: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}
                            >
                              <div style={{ background: '#fff', width: '80%', height: '2px' }} />
                            </div>

                            <div
                              onClick={() => handleNavigate('/logout')}
                              className='cursor-pointer hover:text-bluePrimary'
                              style={{ marginLeft: 8, marginTop: 5, paddingBottom: 10 }}
                            >
                              {t('logout')}
                            </div>
                          </div>
                        </DropDownList>
                      </DropDownListContainer>
                    )}
                  </div>
                  {token ? (
                    <>
                      <div className='pl-4 cursor-pointer items-center flex'>
                        {!isOpen ? (
                          <Icon name='chevron-down' color='#fff' size='sm' />
                        ) : (
                          <Icon name='chevron-up' color='#fff' size='sm' />
                        )}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className='flex'>{ToggleSidebar}</div>
            </div>
          </div>
        </nav>
      </div>
      {/* <div style={{ position: 'absolute', backgroundColor: 'green', width: '100%', zIndex: 999 }}>1111</div> */}
    </>
  )
}
