import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/router'

import { getAllRelated } from '@/store/related-collection/actions'

import Button from '@/components/button'
import code from '@shared/json/codephone.json'
//Language
// import { useTranslation } from 'react-i18next'

interface IProps {}

export default function createVerify({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  // const router = useRouter()
  const [OTP, setOTP] = useState<boolean>(true)
  const [codeNum] = useState<string>('')
  const [NumOTP, setNumOTP] = useState<string>('')
  const [sortcode, setSortCode] = useState<string>('')
  const [phoneNum, setPhoneNum] = useState<string>('')

  useEffect(() => {
    // const lang = sessionStorage.getItem('language') || 'en'
    // i18n.changeLanguage(lang)
    fetchPopular()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  const handleUpdateProfile = () => {
    setOTP(false)
  }

  const handleSelectSortCode = (e: any) => {
    setSortCode(e.target.value)
    console.log('sortcode', e.target.value)
  }

  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Profile</h3>

      <div className='w-[100%] flex'>
        <div className='w-full bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <div className='font-semibold leading-none capitalize text-white mt-5'>
        {OTP ? 'User details' : 'Change mobile number'}
      </div>
      {OTP ? (
        <div className='w-full'>
          <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center relative'>
            {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
            <div className='flex items-center w-full flex-col mb-10'>
              <div className='text-bluePrimary items-center text-xl text-white justify-center mt-2'>
                Welcome back! Your email has been confirmed
              </div>
              <div className='text-bluePrimary items-center text-xl text-white justify-center'>
                One more step below, your registration will be completed
              </div>
            </div>

            <div className='flex items-center w-full flex-col'>
              <div className='flex items-center w-[80%] md:w-[560px] justify-center mb-2'>
                <div className='w-full flex items-center justify-between'>
                  <div className='text-bluePrimary text-sm text-white justify-items-start w-[75%]'>Email</div>
                  <div className={'mx-10 my-1 text-sm text-gray-400 w-full'}>31/12/2000</div>
                </div>
              </div>

              <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
                <div className='w-full flex items-center justify-between flex flex-wrap'>
                  <div className='text-bluePrimary text-sm text-white justify-items-start'>Email Verification Code</div>
                  <input
                    type='search'
                    placeholder=''
                    className={
                      'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                    }
                  />
                </div>
              </div>

              <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
                <div className='w-full flex items-center justify-between flex flex-wrap'>
                  <div className='text-bluePrimary text-sm text-white justify-items-start'>Mobile</div>
                  <div className='flex flex-rows justify-between w-[270px] ml-10 mr-10 relative'>
                    <div className='w-[30%] items-center flex'>
                      <select
                        value={sortcode}
                        onChange={(e) => handleSelectSortCode(e)}
                        className={
                          'items-center bg-transparent h-9 pr-3 pl-2 text-sm text-gray-200 rounded-2xl outline-none focus:border-none focus:outline-none focus:bg-grey-400 focus:text-black'
                        }
                      >
                        <option>00</option>
                        {code.map((item, index) => (
                          <option key={index} value={item?.dial_code}>
                            {item.dial_code}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <input
                        type='search'
                        onChange={(e) => setPhoneNum(e.target.value)}
                        placeholder={phoneNum}
                        className={
                          'ml-2 my-1 bg-transparent h-9 w-[200px] text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
                <div className='w-full flex items-center justify-between flex flex-wrap'>
                  <div className='text-bluePrimary text-sm text-white justify-items-start'></div>
                  <div className='flex flex-rows justify-between w-[280px] ml-10 mr-10 relative items-center'>
                    <div>
                      <input
                        type='search'
                        onChange={(e) => setPhoneNum(e.target.value)}
                        placeholder={phoneNum}
                        className={
                          'ml-2 my-1 bg-transparent h-9 w-[120px] text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                        }
                      />
                    </div>
                    <div className='w-[100px] items-center flex'>
                      <Button
                        handlerClicked={() => handleUpdateProfile()}
                        classed='my-10 bg-bluePrimary text-[8px] text-black border-none w-full rounded-md rounded-[30px]'
                      >
                        Request OTP
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                handlerClicked={() => handleUpdateProfile()}
                classed='my-10 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
              >
                Update Profile
              </Button>
              <div>Notice: You will need to re-verify your identity if you change your Email / Mobile.</div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className='grid grid-flow-row-dense w-full'>
            <div className='w-full justify-center items-center'>
              <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center items-center  '>
                {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}

                <div className='flex items-center w-full flex-col'>
                  <div className='text-bluePrimary text-xl text-white justify-center mt-10'>
                    Your new mobile number: {sortcode} {codeNum}
                  </div>

                  <div className='w-full justify-center flex'>
                    <div className='justify-between flex flex-rows w-1/3 items-center flex-wrap'>
                      <input
                        type='search'
                        placeholder=''
                        value={NumOTP}
                        onChange={(e) => setNumOTP(e.target.value)}
                        className={
                          'mx-3 my-1 bg-transparent h-9 w-[200px] text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                        }
                      />
                      <Button
                        handlerClicked={() => {}}
                        classed='my-1 bg-blueDark text-black border-none w-auto rounded-md rounded-[30px]'
                      >
                        Request OTP
                      </Button>
                    </div>
                  </div>

                  <Button
                    handlerClicked={() => {}}
                    classed='my-1 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
                  >
                    Login Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
