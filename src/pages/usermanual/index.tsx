import { ReactElement } from 'react'

//Language
// import { useTranslation } from 'react-i18next'

interface IProps {}

export default function UserManual({}: IProps): ReactElement {
  // const { t, i18n } = useTranslation()

  return (
    <>
      <h3 className='font-semibold leading-none capitalize text-white '>Help</h3>

      <div className='w-[100%] flex'>
        <div className='w-full bg-placeholder flex m-3 h-[12rem] rounded-[20px] justify-center items-center'>img</div>
      </div>

      <div className='font-semibold leading-none capitalize text-white mt-5'>User Manual</div>

      <div className='w-full'>
        <div className='bg-placeholder flex flex-col m-3 h-auto rounded-[20px] flex justify-center'>
          <div className='text-bluePrimary text-xl text-white justify-center mt-10 mb-10 flex'>How to sell?</div>
        </div>
      </div>
    </>
  )
}
