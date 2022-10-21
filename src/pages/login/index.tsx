import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { getAllRelated } from '@/store/related-collection/actions'

import Button from '@/components/button'

// Modal
import Modal from '@/components/modal'
import { MODAL_TYPE } from '@/shared/enum/modal'

import { useWeb3 } from '@3rdweb/hooks'
import api from '@/api/api'

//Language
import { useTranslation } from 'react-i18next'

interface IProps {}

// const disconnectWallet_self = (address: any) => {
//   console.log(address)
// }

export default function Login({}: IProps): ReactElement {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [OTP, setOTP] = useState<boolean>(true)
  const [code, setCode] = useState<string>('')
  const [showAlert, setshowAlert] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const { connectWallet, address } = useWeb3()
  // const { connectWallet, address, disconnectWallet } = useWeb3()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    fetchPopular()
    const lang = sessionStorage.getItem('language') || 'en'
    i18n.changeLanguage(lang)
    if (isLoading) {
      setIsLoading(false)
    }
  }, [isLoading])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  const handleLogin = async () => {
    const login = await api.login(email, password)
    if (login?.data?.success) {
      sessionStorage.setItem('tokenAuth', login?.data?.data?.token)
      setOTP(false)
      setIsLoading(true)
      // router.push(`/`)
    }

    return login
  }

  const handleRequestAgain = async () => {
    const login = await api.login(email, password)
    if (login?.data?.success) {
      sessionStorage.setItem('tokenAuth', login?.data?.data?.token)
      setOTP(false)
      setIsLoading(true)
      // router.push(`/`)
    }

    return login
  }

  const handleLoginConfirm = async () => {
    const token = sessionStorage.getItem('tokenAuth') || ''

    const login2 = await api.login2(code, token)
    if (login2?.data?.success) {
      setTitle('You have successfully logged in.')
      sessionStorage.setItem('token', login2?.data?.data?.token)
      setIsLoading(true)
      setshowAlert(true)
      setTimeout(() => {
        setshowAlert(false)
        router.push(`/`)
      }, 2000)
    }
    if (!login2?.data?.success) {
      setTitle('You failed to login.')
      setshowAlert(true)
      setTimeout(() => {
        setshowAlert(false)
      }, 2000)
    }

    return login2
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    setIsLoading(true)
  }

  const HandleClose = () => {
    setshowAlert(false)
  }

  if (isLoading) return <div> loading...</div>

  return (
    <>
      {OTP ? (
        <>
          <h3 className='font-semibold leading-none capitalize text-white '>{t('login')}</h3>

          <div className='w-full'>
            <div className='bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
          </div>

          <div className='font-semibold leading-none capitalize text-gray-500 mt-5'>{t('login to your account')}</div>

          <div className='grid grid-flow-row-dense w-full'>
            <div className='w-full '>
              <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center'>
                {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
                {!sessionStorage.getItem('token') ? (
                  <div className='flex items-center w-full h-2/3 flex-col'>
                    <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10'>
                      {t('login with email')}
                    </div>

                    <input
                      type='search'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('email address')}
                      className={
                        'mx-10 mt-10 my-1 bg-transparent h-9 w-1/3 text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                      }
                    />

                    <input
                      type='password'
                      placeholder={t('password')}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={
                        'mx-10 my-1 bg-transparent h-9 w-1/3 text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                      }
                    />

                    <div
                      onClick={() => router.push(`/forgot-password`)}
                      className=' cursor-pointer text-bluePrimary text-sm text-white place-content-start w-1/3 my-5'
                    >
                      {t('forgot password')}
                    </div>

                    <Button
                      handlerClicked={handleLogin}
                      classed='my-1 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
                    >
                      Continue
                    </Button>
                    <Button
                      handlerClicked={() => router.push(`/registration`)}
                      classed='my-1 bg-blueDark text-white border-none w-1/3 rounded-md rounded-[30px]'
                    >
                      {t('register now')}
                    </Button>
                  </div>
                ) : (
                  <div className='flex items-center w-full h-2/3 flex-col justify-center'>
                    <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10'>You are logged in</div>

                    <Button
                      handlerClicked={() => handleLogout()}
                      classed='my-1 bg-blueDark text-white border-none w-1/3 rounded-md rounded-[30px]'
                    >
                      {t('logout')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
            {!sessionStorage.getItem('token') && (
              <div className='w-full'>
                <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center'>
                  {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 1</div> */}
                  <div className='flex justify-center items-center w-full h-2/3 flex-col'>
                    {address ? (
                      <>
                        <div className='text-bluePrimary text-xl text-white justify-center'>your Metamask Wallet</div>
                        <p>{address}</p>
                        {/* <div onClick={() => disconnectWallet_self(address)}>
                    <Button classed='bg-bluePrimary text-black border-none w-48 rounded-md rounded-[30px]'>
                      Disconnect wallet
                    </Button>
                  </div> */}
                      </>
                    ) : (
                      <>
                        <div className='text-bluePrimary text-xl text-white justify-center'>
                          Login with your Metamask Wallet
                        </div>
                        <div
                          onClick={() => connectWallet('injected')}
                          className='bg-white flex flex-center justify-center w-50 mx-[20%] mt-10 cursor-pointer rounded-[12px]'
                        >
                          <img
                            src={'https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2022/03/Metamask-cover.png'}
                            width='20%'
                            height='auto'
                            alt='custom'
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <h3 className='font-semibold leading-none capitalize text-white '>{t('login')}</h3>

          <div className='w-full'>
            <div className='bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
          </div>

          <div className='font-semibold leading-none capitalize text-gray-500 mt-5'>{t('login to your account')}</div>

          <div className='grid grid-flow-row-dense w-full'>
            <div className='w-full justify-center items-center'>
              <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center items-center  '>
                {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}

                <div className='flex items-center w-full flex-col'>
                  <div className='text-bluePrimary text-xl text-white justify-center mt-10'>Welcome back!</div>
                  <div className='text-bluePrimary text-xl text-white justify-center mb-10'>
                    A confirmation code has been sent to your email.
                  </div>

                  <div className='my-1 text-black border-none w-1/3 justify-between'>
                    <div className='w-full flex items-center'>
                      <div className='w-auto flex items-center justify-between flex-wrap md:justify-center sm:justify-center'>
                        <div className='text-bluePrimary text-sm text-white'>Email</div>
                        <div className={'mx-10 my-1 text-sm text-gray-400'}>{email}</div>
                      </div>
                    </div>
                  </div>

                  <div className='w-auto justify-center flex'>
                    <div className='justify-between flex flex-rows w-auto items-center flex-wrap'>
                      <div className='text-bluePrimary text-sm text-white'>Email Verification Code</div>
                      <div>
                        <input
                          type='search'
                          placeholder=''
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          className={
                            'mx-10 my-1 bg-transparent h-9 w-[200px] text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                          }
                        />
                      </div>
                      <Button
                        handlerClicked={handleRequestAgain}
                        classed='my-1 bg-blueDark text-black border-none w-auto rounded-md rounded-[30px]'
                      >
                        Not received? Request again
                      </Button>
                    </div>
                  </div>

                  <Button
                    handlerClicked={handleLoginConfirm}
                    classed='my-1 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
                  >
                    Login Now
                  </Button>
                </div>
                {showAlert ? (
                  <Modal
                    modal={MODAL_TYPE.BOX}
                    subtitle1={title}
                    state={undefined}
                    setState={() => {}}
                    handleClicked={HandleClose}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
