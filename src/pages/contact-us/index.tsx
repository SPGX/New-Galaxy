import { ReactElement, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
// import { useTypedSelector } from '@/hooks'

import { getAllRelated } from '@/store/related-collection/actions'
// import ICon from '@/components/icon'
// import Image from '@/components/image'

import Button from '@/components/button'
//Language
// import { useTranslation } from 'react-i18next'

interface IProps {}

export default function ContactUs({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    fetchPopular()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Help</h3>

      <div className='w-[100%] flex'>
        <div className='w-full bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <div className='font-semibold leading-none capitalize text-white mt-5'>Contact us</div>

      <div className='w-full'>
        <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center'>
          <div className='flex items-center w-full flex-col'>
            <div className='font-semibold text-white p-5'>Please fill in the form below and we will reply you very soon</div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Name</div>
                <input
                  disabled
                  type='search'
                  placeholder='Tom Cruise'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>
            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Email</div>
                <input
                  disabled
                  type='search'
                  placeholder='tomcruise@gmail.com'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <textarea
              placeholder='Hello there, this is some text in a text area'
              style={{ resize: 'none', borderRadius: 10, border: 'none', padding: 10, marginTop: 10 }}
              className='bg-[#475569] text-white text-[0.8rem] w-[80%] md:w-[560px] h-[200px]'
            />

            <Button
              handlerClicked={() => router.push(`/`)}
              classed='my-10 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
