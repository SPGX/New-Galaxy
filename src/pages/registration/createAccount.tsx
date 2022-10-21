import { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
// import { useTypedSelector } from '@/hooks'

import { getAllRelated } from '@/store/related-collection/actions'
// import ICon from '@/components/icon'
// import Image from '@/components/image'

import Button from '@/components/button'

import code from '@shared/json/codephone.json'

// import { useWeb3 } from '@3rdweb/hooks'

interface IProps {}

// const disconnectWallet_self = (address: any) => {
//   console.log(address)
// }

export default function CreateAccount({}: IProps): ReactElement {
  const dispatch = useDispatch()
  const router = useRouter()
  // const isRelated = useTypedSelector((state) => state.related)
  // const img = '../assests/images/meta.png'

  // const { connectWallet, address, disconnectWallet } = useWeb3()
  // const { connectWallet, address } = useWeb3()

  // window.localStorage.getItem() = address;

  useEffect(() => {
    fetchPopular()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  // return <div>NFT Page {popular?.id} : {popular?.collectionName}</div>
  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Registration</h3>

      <div className='w-full'>
        <div className='bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <h4 className='font-semibold leading-none capitalize text-white mt-5'>Create Personal Account</h4>

      <div className='w-full justify-center'>
        <div className='bg-placeholder flex flex-col m-1 h-auto rounded-[20px] p-2'>
          <div className='flex w-[100%] md:items-center h-2/3 flex-col'>
            {/* <div className='text-bluePrimary text-xl text-white justify-center mt-10'>Using your Email Address</div> */}

            <div className='flex items-center w-[80%] md:w-[560px] justify-center mt-10'>
              <div className='w-full flex items-center justify-between flex flex-wrap flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Name</div>
                <input
                  type='search'
                  placeholder='Email Address'
                  className={
                    'mx-10 mt-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Date of Birth</div>
                <input
                  type='search'
                  placeholder='DD/MM/YYYY'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Gender</div>
                <div
                  className={
                    'my-1 mr-10 bg-transparent h-9 w-[270px] ml-10 text-sm text-gray-400 rounded-2xl outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                >
                  <select
                    className={
                      'items-center mr-10 bg-transparent h-9 w-[100%] pl-5 text-sm text-gray-200 rounded-2xl outline-none focus:border-none focus:outline-none focus:bg-grey-400 focus:text-black'
                    }
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Mobile</div>
                <div className='flex flex-rows justify-between w-[270px] ml-10 mr-10'>
                  <div className='w-[30%] items-center flex'>
                    <select
                      className={
                        'items-center bg-transparent h-9 pr-3 pl-2 text-sm text-gray-200 rounded-2xl outline-none focus:border-none focus:outline-none focus:bg-grey-400 focus:text-black'
                      }
                    >
                      {code.map((item, index) => (
                        <option key={index} value='male'>
                          {[...item.dial_code].sort()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <input
                      type='search'
                      placeholder='Your Mobile number'
                      className={
                        'ml-2 my-1 bg-transparent h-9 w-[200px] text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center grow '>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Email</div>
                <input
                  type='search'
                  placeholder='Your email address'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Verify email</div>
                <input
                  type='search'
                  placeholder='Repeat your email address here'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px] text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Password</div>
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
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Verify password</div>
                <input
                  type='search'
                  placeholder='Repeat your password here'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center mt-5'>
              <div className='w-full flex items-center justify-start flex flex-wrap row-auto'>
                <input type='checkbox' className='h-[25px] w-[25px] appearance-none indeterminate:bg-gray-300' />
                <div className='text-bluePrimary text-[0.5rem] text-white justify-items-start ml-5'>
                  I have read and agree to New Galaxy’s
                </div>
                <div className='cursor-pointer text-bluePrimary text-[0.5rem] text-white justify-items-start ml-1 underline decoration-1'>
                  Privacy Policy.
                </div>
                <div className='text-bluePrimary text-[0.5rem] text-white justify-items-start ml-1'>and</div>
                <div className='cursor-pointer text-bluePrimary text-[0.5rem] text-white justify-items-start ml-1 underline decoration-1'>
                  Term of Services
                </div>
              </div>
            </div>

            <div className='w-full flex flex-col items-center'>
              <Button classed='bg-bluePrimary text-black border-none w-2/5 rounded-md rounded-[30px] mt-10'>
                Create Personal Account
              </Button>
              <Button
                handlerClicked={() => router.push(`/login`)}
                classed='my-1 text-white border-none w-1/3 rounded-md rounded-[30px]'
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
