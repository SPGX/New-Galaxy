import { ReactElement, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

// Modal
import Modal from '@/components/modal'
import { MODAL_TYPE } from '@/shared/enum/modal'
// import { useTypedSelector } from '@/hooks'

import { getAllRelated } from '@/store/related-collection/actions'
// import ICon from '@/components/icon'
// import Image from '@/components/image'

import Button from '@/components/button'
//Language
// import { useTranslation } from 'react-i18next'

interface IProps {}

export default function Settings({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const router = useRouter()
  const [showAlert, setshowAlert] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [curpassword, setCurPassword] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [verifypassword, setVerifyPassword] = useState<string>('')

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      router.push('/login')
    }
    fetchPopular()
  }, [])

  /* @API: fetch related */
  const fetchPopular = async () => {
    await dispatch(getAllRelated())
  }

  const HandleClose = () => {
    setshowAlert(false)
  }

  const handleUpdate = () => {
    console.log('password.length', password.length)
    if (password !== verifypassword) {
      console.log('1')
      setTitle('Passwords do not match')
      setshowAlert(true)
      setTimeout(() => {
        setshowAlert(false)
      }, 2000)
      return
    }
    if (password.length < 8 && verifypassword.length < 8) {
      console.log('2')
      setTitle('Password should be at least 8 characters.')
      setshowAlert(true)
      setTimeout(() => {
        setshowAlert(false)
      }, 2000)
      return
    }

    if (password === verifypassword) {
      console.log('3')
      setTitle('Your password has been successfully changed.')
      setshowAlert(true)
      setTimeout(() => {
        setshowAlert(false)
      }, 2000)
      return
    }
  }

  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Settings</h3>

      <div className='w-[100%] flex'>
        <div className='w-full bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <div className='font-semibold leading-none capitalize text-gray-500 mt-5'>Change password</div>

      <div className='w-full'>
        <div className='bg-placeholder flex flex-col m-3 h-[32rem] rounded-[20px] flex justify-center'>
          {/* <div className='text-bluePrimary text-xl text-white p-5'>Option 2</div> */}
          <div className='flex items-center w-full flex-col'>
            <div className='flex items-center w-[80%] md:w-[560px] justify-center mb-5'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>Current Password</div>
                <input
                  type='password'
                  value={curpassword}
                  onChange={(e) => setCurPassword(e.target.value)}
                  placeholder=''
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <div className='flex items-center w-[80%] md:w-[560px] justify-center'>
              <div className='w-full flex items-center justify-between flex flex-wrap'>
                <div className='text-bluePrimary text-sm text-white justify-items-start'>New Password</div>
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  type='password'
                  value={verifypassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  placeholder='Repeat your new password here'
                  className={
                    'mx-10 my-1 bg-transparent h-9 w-[270px]  text-sm text-gray-400 rounded-2xl pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-white '
                  }
                />
              </div>
            </div>

            <Button
              handlerClicked={() => handleUpdate()}
              classed='my-10 bg-bluePrimary text-black border-none w-1/3 rounded-md rounded-[30px]'
            >
              Update Password
            </Button>
          </div>
          {showAlert ? (
            <Modal
              modal={MODAL_TYPE.BOX}
              subtitle1={title}
              state={undefined}
              setState={() => {}}
              handleClicked={HandleClose}
              HandleClose={HandleClose}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}
