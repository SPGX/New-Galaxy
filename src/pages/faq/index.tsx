import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import ICon from '@/components/icon'

import { getAllRelated } from '@/store/related-collection/actions'

import api from '../../api/api'
// import axios from 'axios'

import Button from '@/components/button'
//Language
// import { useTranslation } from 'react-i18next'

interface IProps {}

export default function FAQ({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()
  const [dataFaq, setDataFaq] = useState<any>()
  const [expand, setExpand] = useState<any>([])

  useEffect(() => {
    fetchPopular()
    getDataFAQ()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  const getDataFAQ = async () => {
    const { data } = await api.getFaq()
    setDataFaq(data?.data)
  }

  const handleExpand = (_event: any, id: number) => {
    if (expand === id) {
      setExpand(!id)
    } else {
      setExpand(id)
    }
  }

  const ButtonMetamask = (title: string, id: number, Answer_English: string) => {
    return (
      <>
        <div
          onClick={(event) => handleExpand(event, id)}
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: expand === id ? 0 : 20,
            borderBottomLeftRadius: expand === id ? 0 : 20,
          }}
          className='font-bold justify-between cursor-pointer text-bluePrimary text-sm text-white justify-items-start bg-white text-black text-md p-5 flex-rows flex items-center w-[300px]'
        >
          {title}
          {expand === id ? <ICon name='minus' color='#000' size='lg' /> : <ICon name='plus' color='#000' size='lg' />}
        </div>
        {expand === id && (
          <div className='justify-between cursor-pointer text-bluePrimary text-sm text-white justify-items-start bg-[#CBD5E1] text-black text-md p-5 flex-rows flex items-center w-[300px]'>
            {Answer_English}
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Help</h3>

      <div className='w-[100%] flex'>
        <div className='w-full bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      {/* <div>{JSON.stringify(data)}</div> */}

      <div className='font-semibold leading-none capitalize text-white mt-5'>FAQ</div>

      <div className='w-full'>
        <div className='bg-placeholder flex flex-col m-3 h-auto rounded-[20px] flex justify-center'>
          {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
          <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10 flex'>Frequently Asked Questions</div>
          <div className='flex items-center w-full flex-col m-2 '>
            <div className='flex items-start justify-around mb-5 w-full'>
              {dataFaq?.map((item: any, index: number) => (
                <div key={index}>
                  {ButtonMetamask(item?.attributes?.Question_English, item?.id, item?.attributes?.Answer_English)}
                </div>
              ))}
            </div>

            <Button
              handlerClicked={() => router.push(`/`)}
              classed='my-10 text-lg text-white border-none w-1/3 rounded-md rounded-[30px] underline decoration-1'
            >
              More ...
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
