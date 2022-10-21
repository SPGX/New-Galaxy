import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import api from '@/api/api'
// import { useTypedSelector } from '@/hooks'

import { getAllRelated } from '@/store/related-collection/actions'
// import ICon from '@/components/icon'
// import Image from '@/components/image'

import Button from '@/components/button'

import { useWeb3 } from '@3rdweb/hooks'

interface IProps {}

// const disconnectWallet_self = (address: any) => {
//   console.log(address)
// }

export default function Registration({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  // const isRelated = useTypedSelector((state) => state.related)
  // const img = '../assests/images/meta.png'

  // const { connectWallet, address, disconnectWallet } = useWeb3()
  const { connectWallet, address } = useWeb3()

  // window.localStorage.getItem() = address;

  useEffect(() => {
    fetchPopular()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  const handleRegister = async () => {
    console.log('email >>', email)
    const registers = await api.register1(email)
    console.log('resigters >>', registers)
    if (registers?.data?.success) {
      router.push(`/registration/createVerify`)
    }
    if (!registers?.data?.success) {
      console.log('false')
    }
    return registers
  }

  const handleEmail = (e: any) => {
    console.log('e >>>>>', e.target.value)
    setEmail(e.target.value)
  }

  // return <div>NFT Page {popular?.id} : {popular?.collectionName}</div>
  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Registration</h3>

      <div className='w-full'>
        <div className='bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <div className='font-semibold leading-none capitalize text-gray-500 mt-5'>Create an account </div>

      <div className='grid grid-flow-row-dense grid-cols-2 grid-rows-2 w-full'>
        <div className='w-full'>
          <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px]'>
            <div className='text-bluePrimary text-xl text-white p-5'>Option 1</div>
            <div className='flex justify-center items-center w-full h-2/3 flex-col'>
              {address ? (
                <>
                  <div className='text-bluePrimary text-xl text-white justify-center'>your Metamask Wallet</div>
                  <p>{address}</p>
                  {/* <div onClick={() => disconnectWallet_self(address)}> */}
                  {/* <div onClick={disconnectWallet}>
                    <Button classed='bg-bluePrimary text-black border-none w-48 rounded-md rounded-[30px]'>Disconnect wallet</Button>
                  </div> */}
                </>
              ) : (
                <>
                  <div className='text-bluePrimary text-xl text-white justify-center'>Connect your Metamask Wallet</div>
                  <div
                    onClick={() => connectWallet('injected')}
                    className='bg-white flex flex-center justify-center w-50 mx-10 mt-10 cursor-pointer rounded-[12px]'
                  >
                    <img
                      src={'https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2022/03/Metamask-cover.png'}
                      width='30%'
                      height='auto'
                      alt='custom'
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px]'>
            <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div>
            <div className='flex justify-center items-center w-full h-2/3 flex-col'>
              <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10'>Using your Email Address</div>

              <input
                type='search'
                value={email}
                onChange={(e) => handleEmail(e)}
                placeholder='Email Address'
                className={
                  ' mx-10 mt-10 my-1 bg-transparent h-9 w-2/3 text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                }
              />

              <Button
                handlerClicked={() => handleRegister()}
                classed='bg-bluePrimary text-black border-none w-48 rounded-md rounded-[30px] w-2/3 mt-10'
              >
                Continue
              </Button>
              <Button
                handlerClicked={() => router.push(`/login`)}
                classed='my-1 text-white border-none w-2/3 rounded-md rounded-[30px]'
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className='w-full'>
          You may also be required to provide a phone number to receive an SMS as extra account security.
        </div>
      </div>
    </>
  )
}
