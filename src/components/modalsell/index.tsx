import { FormEvent, ReactElement } from 'react'
import { useState } from 'react'
interface IProps {
  setShowModal?: () => void
  type?: string
  title: string
  disabled?: boolean
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
  menu?: number
}

export default function ModalSell({
  setShowModal,
  title,
  button_enter,
  status,
  handleClicked,
  HandleClose,
  state,
  setState,
}: IProps): ReactElement {
  const [select, setSelect] = useState(1)

  /* @Function: input on change */
  const onChangeHandle = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setState(e.currentTarget.value.trim())
  }

  /* @Function: on enter searching */
  const onKeyDownHandle = (e: any) => {
    if (e.key === 'Enter') handleClicked()
  }

  const onSelect = (m: any) => {
    setSelect(m)
  }

  const menuSelector = [
    {
      id: 1,
      icon: '$ ',
      title: 'Fixed Price',
    },
    {
      id: 2,
      icon: ' ৳',
      title: 'English Auction',
    },
    {
      id: 3,
      icon: '₳',
      title: 'Dutch Auction',
    },
  ]

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-[600px]'>
          {/*content*/}

          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-placeholder outline-none focus:outline-none justify-center items-center'>
            {/*header*/}
            <div className='flex items-center justify-center p-5 rounded-t w-[100%] relative'>
              <h4 className='text-xxl font-semibold text-white '>{title}</h4>
              <button
                className='z-[99] absolute top-5 right-5 p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={HandleClose}
              >
                <span className='bg-transparent text-white h-6 w-6 text-2xl'>×</span>
              </button>
            </div>

            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div className='text-sm font-semibold text-white mb-5'>Type</div>
              <div className='flex flex-row justify-between mb-5'>
                {menuSelector.map((item, index) => {
                  return (
                    <>
                      <div
                        onClick={() => onSelect(item.id)}
                        className='cursor-pointer'
                        key={index}
                        style={{
                          width: '100%',
                          height: '100px',
                          backgroundColor: select === item?.id ? '#00BCD9' : '#fff',
                          fontWeight: 'bold',
                          fontSize: '12px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#000',
                          flexDirection: 'column',
                        }}
                      >
                        <div>{item?.icon}</div>
                        <div>{item?.title}</div>
                      </div>
                    </>
                  )
                })}
              </div>
              {select == 1 && (
                <>
                  {/* row 1 */}
                  <div className='text-sm font-semibold text-white mb-2'>Price</div>
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
                  {/* row 2 */}
                  <div className='text-sm font-semibold text-white mb-2 mt-5'>Duration</div>
                  <div className='flex flex-row items-center'>
                    <input
                      type='search'
                      value={state}
                      placeholder=''
                      onChange={(e) => onChangeHandle(e)}
                      onKeyPress={(e) => onKeyDownHandle(e)}
                      className={
                        'my-1 bg-white h-9 w-[100%] text-sm rounded-md pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-black '
                      }
                    />
                  </div>
                </>
              )}
              {select === 2 && (
                <>
                  {/* row 1 */}
                  <div className='text-sm font-semibold text-white mb-2'>Start Price</div>
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
                  <div className='text-sm font-semibold text-white mb-2 mt-5'>Reserved Price</div>
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
                  {/* row 2 */}
                  <div className='text-sm font-semibold text-white mb-2 mt-5'>Duration</div>
                  <div className='flex flex-row items-center'>
                    <input
                      type='search'
                      value={state}
                      placeholder=''
                      onChange={(e) => onChangeHandle(e)}
                      onKeyPress={(e) => onKeyDownHandle(e)}
                      className={
                        'my-1 bg-white h-9 w-[100%] text-sm rounded-md pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-black '
                      }
                    />
                  </div>
                </>
              )}
              {select === 3 && (
                <>
                  {/* row 1 */}
                  <div className='text-sm font-semibold text-white mb-2'>Start Price</div>
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
                  <div className='text-sm font-semibold text-white mb-2 mt-5'>Reserved Price</div>
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
                  <div className='text-sm font-semibold text-white mb-2 mt-5'>Hourly Decrease Rate</div>
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
                  {/* row 2 */}
                  <div className='text-sm font-semibold text-white mb-2 mt-5'>Duration</div>
                  <div className='flex flex-row items-center'>
                    <input
                      type='search'
                      value={state}
                      placeholder=''
                      onChange={(e) => onChangeHandle(e)}
                      onKeyPress={(e) => onKeyDownHandle(e)}
                      className={
                        'my-1 bg-white h-9 w-[100%] text-sm rounded-md pl-5 pr-3 outline-none focus:border-none focus:outline-none focus:bg-gray focus:text-black '
                      }
                    />
                  </div>
                </>
              )}
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
                      <div className='font-bold text-white'>test</div>
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

// export default Modal
