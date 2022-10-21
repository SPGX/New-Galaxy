import { FunctionComponent, FormEvent, useState } from 'react'

import { MODAL_TYPE } from '@/shared/enum/modal'
interface IModal {
  setShowModal?: () => void
  type?: string
  subtitle?: string
  subtitle1?: string
  subtitle2?: string
  title?: string
  disabled?: boolean
  bid?: string
  button_enter?: string
  your_buy?: string
  least?: any
  your_bid?: string
  your_balance?: string
  service_fee?: string
  you_will_pay?: string
  status?: string
  usdc?: any
  state: string | undefined | number
  setState: (value: string | '') => void | any
  handleClicked: Function
  HandleClose?: () => void
  handleRouter?: () => void
  modal?: string
}

const Modal: FunctionComponent<IModal> = ({
  setShowModal,
  title,
  subtitle,
  bid,
  button_enter,
  least,
  your_bid,
  your_balance,
  service_fee,
  you_will_pay,
  your_buy,
  status,
  handleClicked,
  HandleClose,
  state,
  setState,
  modal,
  subtitle1,
  subtitle2,
  handleRouter,
}) => {
  const [cb] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(true)

  // const payment = [
  //   {
  //     id: 1,
  //     choose: 'alipay',
  //     img: 'https://au2-images.shop.samsung.com/medias/AlipayHK.png?context=bWFzdGVyfGltYWdlc3w3NzQ0NnxpbWFnZS9wbmd8aGE5L2g4Yy8xMjkzMDUxOTY2MjYyMi9BbGlwYXlISy5wbmd8YmQxNjAzNjVmN2Q1ZjZmMzQ4NGU3MTFjYzQ4N2FkMTAyNWNlNDA3Mjg3ODNlZWQxNjJmN2YxNGEwNTNlYjgyZQ',
  //   },
  //   {
  //     id: 2,
  //     choose: 'wechat',
  //     img: 'https://www.kindpng.com/picc/m/242-2426872_wechat-pay-logo-png-transparent-png.png',
  //   },
  // ]

  const onChangeHandle = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setState(e.currentTarget.value.trim())
  }

  /* @Function: on enter searching */
  const onKeyDownHandle = (e: any) => {
    if (e.key === 'Enter') handleClicked()
  }

  // const handlePayment = (e: any) => {
  //   console.log('e', e.target.checked)
  //   console.log('cb', cb)
  // }

  switch (modal) {
    case MODAL_TYPE.BOX:
      return (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-[500px]'>
              {/*content*/}

              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-placeholder outline-none focus:outline-none justify-center items-center'>
                {/*header*/}
                <>
                  <div
                    className='bg-placeholder'
                    style={{
                      width: '600px',
                      height: '150px',
                      position: 'absolute',
                      zIndex: 999,
                      display: 'flex',
                      borderRadius: 20,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 999,
                        display: 'flex',
                      }}
                      className='w-full h-full items-center justify-center relative'
                    >
                      <div
                        onClick={HandleClose}
                        className='cursor-pointer'
                        style={{
                          position: 'absolute',
                          color: '#fff',
                          top: 20,
                          right: 20,
                          backgroundColor: '#64748B',
                          borderRadius: '100%',
                          fontSize: '15px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          width: '30px',
                          height: '30px',
                          padding: 10,
                        }}
                      >
                        X
                      </div>
                      <div className='relative w-[100%] my-6 mx-auto max-w-[500px] justify-items-center items-center flex flex-col'>
                        <div className='font-bold text-white flex flex-wrap'>{subtitle1}</div>
                        <div className='font-bold text-white flex flex-wrap'>{subtitle2}</div>
                      </div>
                    </div>
                  </div>
                  <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
                {/* footer */}
              </div>
            </div>
          </div>
          <>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )
    case MODAL_TYPE.ALERT:
      return (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-[500px]'>
              {/*content*/}

              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-placeholder outline-none focus:outline-none justify-center items-center'>
                {/*header*/}
                <>
                  <div
                    className='bg-placeholder'
                    style={{
                      width: '600px',
                      height: '150px',
                      position: 'absolute',
                      zIndex: 999,
                      display: 'flex',
                      borderRadius: 20,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 999,
                        display: 'flex',
                      }}
                      className='w-full h-full items-center justify-center relative'
                    >
                      <div
                        onClick={HandleClose}
                        className='cursor-pointer'
                        style={{
                          position: 'absolute',
                          color: '#fff',
                          top: 20,
                          right: 20,
                          backgroundColor: '#64748B',
                          borderRadius: '100%',
                          fontSize: '15px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          width: '30px',
                          height: '30px',
                          padding: 10,
                        }}
                      >
                        X
                      </div>
                      <div className='relative w-[100%] my-6 mx-auto max-w-[500px] justify-items-center items-center flex flex-col'>
                        <div className='font-bold text-white flex flex-wrap'>{subtitle1}</div>
                        <div className='font-bold text-white flex flex-wrap'>{subtitle2}</div>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                          <button
                            className='bg-[#64748B]  text-black font-bold text-[12px] px-8 py-3 rounded-xl mr-1 mb-1'
                            type='button'
                            onClick={HandleClose}
                          >
                            Decide later
                          </button>
                          <button
                            className='bg-bluePrimary text-black font-bold text-[12px] px-8 py-3 rounded-xl mr-1 mb-1'
                            type='button'
                            onClick={handleRouter}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
                {/* footer */}
              </div>
            </div>
          </div>
          <>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )
    case MODAL_TYPE.PAYMENT:
      return (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-[500px]'>
              {/*content*/}

              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-placeholder outline-none focus:outline-none justify-center items-center'>
                {/*header*/}
                <>
                  <div
                    className='bg-placeholder'
                    style={{
                      width: '600px',
                      height: '150px',
                      position: 'absolute',
                      zIndex: 999,
                      display: 'flex',
                      borderRadius: 20,
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 999,
                        display: 'flex',
                      }}
                      className='w-full h-full items-center justify-center relative'
                    >
                      <div
                        onClick={HandleClose}
                        className='cursor-pointer'
                        style={{
                          position: 'absolute',
                          color: '#fff',
                          top: 20,
                          right: 20,
                          backgroundColor: '#64748B',
                          borderRadius: '100%',
                          fontSize: '15px',
                          justifyContent: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          width: '30px',
                          height: '30px',
                          padding: 10,
                        }}
                      >
                        X
                      </div>
                      <div className='relative w-[100%] my-6 mx-auto max-w-[500px] justify-items-center items-center flex flex-col'>
                        <div className='font-bold text-white flex flex-wrap'>{subtitle1}</div>
                        <div className='font-bold text-white flex flex-wrap'>{subtitle2}</div>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                          <button
                            className='bg-[#64748B]  text-black font-bold text-[12px] px-8 py-3 rounded-xl mr-1 mb-1'
                            type='button'
                            onClick={HandleClose}
                          >
                            Decide later
                          </button>
                          <button
                            className='bg-bluePrimary text-black font-bold text-[12px] px-8 py-3 rounded-xl mr-1 mb-1'
                            type='button'
                            onClick={handleRouter}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
                {/* footer */}
              </div>
            </div>
          </div>
          <>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )

    default:
      return (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-[500px]'>
              {/*content*/}

              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-placeholder outline-none focus:outline-none justify-center items-center'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 rounded-t w-[80%]'>
                  <h3 className='text-3xl font-semibold text-white'>{title}</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={HandleClose}
                  >
                    <span className='bg-transparent text-white h-6 w-6 text-2xl'>×</span>
                  </button>
                </div>
                <div className='p-5 text-sm font-semibold text-white max-w-[80%]'>{subtitle}</div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <div className='text-sm font-semibold text-white mb-5'>{bid}</div>
                  <div className='flex flex-row items-center'>
                    <div
                      className={
                        'font-bold mr-5 my-1 bg-white h-9 w-[80px] text-[12px] text-black rounded-lg items-center justify-center flex'
                      }
                    >
                      <img src={'https://sv1.picz.in.th/images/2022/09/28/pc424g.png'} width='20px' height='20px' />
                      <div className='ml-1'>USDC</div>
                    </div>
                    <input
                      type='search'
                      value={state}
                      placeholder=''
                      onChange={(e) => onChangeHandle(e)}
                      onKeyPress={(e) => onKeyDownHandle(e)}
                      className={
                        'my-1 bg-white h-9 w-[auto] text-sm rounded-md pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-black '
                      }
                    />
                  </div>
                  <div className='border-b w-[80%] h-0.5 mt-5 mb-10' />
                  <div className='text-sm font-semibold text-white mb-10'>{least}</div>
                  <div style={{ width: '80%' }}>
                    {your_bid && (
                      <>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                          <div className='text-sm font-semibold text-white mb-5 flex-1'>Your bidding balance</div>
                          <div className='text-sm font-semibold text-white mb-5 items-right'>{your_bid}</div>
                        </div>
                      </>
                    )}
                    {your_buy && (
                      <>
                        <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                          <div className='text-sm font-semibold text-white mb-5 flex-1'>Buy now price</div>
                          <div className='text-sm font-semibold text-white mb-5 items-right'>{your_buy}</div>
                        </div>
                      </>
                    )}

                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                      <div className='text-sm font-semibold text-white mb-5 flex-1'>Your balance</div>
                      <div className='text-sm font-semibold text-white mb-5 items-right'>{your_balance}</div>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                      <div className='text-sm font-semibold text-white mb-5 flex-1'>Service fee</div>
                      <div className='text-sm font-semibold text-white mb-5'>{service_fee}</div>
                    </div>
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
                      <div className='text-sm font-semibold text-white mb-5 flex-1'>You will pay</div>
                      <div className='text-sm font-semibold text-white mb-5'>{you_will_pay}</div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 justify-center rounded-b'>
                  <button
                    className='bg-bluePrimary text-black font-bold text-[12px] px-8 py-3 rounded-xl mr-1 mb-1'
                    type='button'
                    onClick={setShowModal}
                  >
                    {button_enter}
                  </button>
                </div>
                {status === 'success' && (
                  <>
                    <div
                      className='bg-placeholder'
                      style={{
                        width: '600px',
                        height: '150px',
                        position: 'absolute',
                        zIndex: 999,
                        display: 'flex',
                        borderRadius: 20,
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 999,
                          display: 'flex',
                        }}
                        className='w-full h-full items-center justify-center relative'
                      >
                        <div
                          onClick={setShowModal}
                          className='cursor-pointer'
                          style={{
                            position: 'absolute',
                            color: '#fff',
                            top: 20,
                            right: 20,
                            backgroundColor: '#64748B',
                            borderRadius: '100%',
                            fontSize: '15px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            width: '30px',
                            height: '30px',
                            padding: 10,
                          }}
                        >
                          X
                        </div>
                        <div className='relative w-auto my-6 mx-auto max-w-[500px]'>
                          <div className='font-bold text-white'>Your have placed your bid on the item successfully!</div>
                        </div>
                      </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                  </>
                )}
                {status === 'notfound' && (
                  <>
                    <div
                      className='bg-placeholder'
                      style={{
                        width: '600px',
                        height: '150px',
                        position: 'absolute',
                        zIndex: 999,
                        display: 'flex',
                        borderRadius: 20,
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          zIndex: 999,
                          display: 'flex',
                        }}
                        className='w-full h-full items-center justify-center relative'
                      >
                        <div
                          onClick={setShowModal}
                          className='cursor-pointer'
                          style={{
                            position: 'absolute',
                            color: '#fff',
                            top: 20,
                            right: 20,
                            backgroundColor: '#64748B',
                            borderRadius: '100%',
                            fontSize: '15px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            width: '30px',
                            height: '30px',
                            padding: 10,
                          }}
                        >
                          X
                        </div>
                        <div className='relative w-auto my-6 mx-auto max-w-[500px]'>
                          <div className='font-bold text-white'>Please choose your payment method</div>
                          <div
                            style={{
                              display: 'flex',
                              flex: 1,
                              // backgroundColor: 'red',
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <div style={{ display: 'flex', flexDirection: 'column', flex: 0.5 }}>
                              <div>
                                <input
                                  // onChange={(e) => handlePayment(e)}
                                  onChange={() => setChecked(!checked)}
                                  defaultChecked={cb}
                                  type='checkbox'
                                  className='indeterminate:bg-gray-300 rounded-lg'
                                />
                                ALIPAY HK
                              </div>
                              <div>
                                <input type='checkbox' className='appearance-none indeterminate:bg-gray-300 rounded-lg' />
                                WECHAT PAY
                              </div>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flex: 0.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <input type='checkbox' className='appearance-none indeterminate:bg-gray-300 rounded-lg' />
                              VISA / MASTERCARD
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                  </>
                )}
              </div>
            </div>
          </div>
          <>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      )
  }
}

export default Modal
