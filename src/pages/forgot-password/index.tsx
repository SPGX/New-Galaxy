import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
// import { useTypedSelector } from '@/hooks'

import { getAllRelated } from '@/store/related-collection/actions'
// import ICon from '@/components/icon'
// import Image from '@/components/image'

import Button from '@/components/button'

// import { useWeb3 } from '@3rdweb/hooks'
//Language
// import { useTranslation } from 'react-i18next'

interface IProps {}

// const disconnectWallet_self = (address: any) => {
//   console.log(address)
// }

export default function ForgotPassword({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()
  const [success, setIsSuccess] = useState<boolean>(false)
  const [token] = useState<string>('1')

  // const { connectWallet, address } = useWeb3()
  // const { connectWallet, address, disconnectWallet } = useWeb3()

  useEffect(() => {
    fetchPopular()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Login</h3>

      <div className='w-[100%] flex'>
        <div className='w-full bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <div className='font-semibold leading-none capitalize text-gray-500 mt-5'>Forgot password</div>

      {token.length === 0 ? (
        <div className='grid grid-flow-row-dense w-auto h-auto'>
          {!success ? (
            <div className='w-full'>
              <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center'>
                {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
                <div className='flex items-center w-full h-2/3 flex-col'>
                  <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10'>
                    Please provide your registered email address
                  </div>

                  <input
                    type='search'
                    placeholder='Email Address'
                    className={
                      'mx-10 mt-3 bg-transparent h-9 w-1/3 text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                    }
                  />

                  <Button
                    handlerClicked={() => setIsSuccess(!success)}
                    classed='my-10 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
                  >
                    Continue
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className='w-full'>
              <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px]'>
                {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
                <div className='flex items-center w-full h-full flex-col flex justify-center '>
                  <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10'>
                    A confirmation email will be sent to your registered email
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className='w-full'>
          <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center'>
            {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
            <div className='flex items-center w-full flex-col'>
              <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
                <div className='w-full flex items-center justify-between flex flex-wrap'>
                  <div className='text-bluePrimary text-sm text-white justify-items-start'>New Password</div>
                  <input
                    type='search'
                    placeholder='Minimum of 8 characters'
                    className={
                      'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                    }
                  />
                </div>
              </div>
              <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
                <div className='w-full flex items-center justify-between flex flex-wrap'>
                  <div className='text-bluePrimary text-sm text-white justify-items-start'>Verify Password</div>
                  <input
                    type='search'
                    placeholder='Repeat your new password here'
                    className={
                      'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                    }
                  />
                </div>
              </div>

              <Button
                handlerClicked={() => router.push(`/`)}
                classed='my-10 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
              >
                Set New Password
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
