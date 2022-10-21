import { ReactElement } from 'react'

import BackgroundImage from '@/components/image/background-image'
import Icon from '@/components/icon'
import Button from '@/components/button'
import { BUTTON_TYPE } from '@/shared/enum/button'

interface IProps {
  item: any
  priceName: string
  isButton?: boolean
  buttonName?: string
  classed?: string
  bgPlaceholder?: string
  handlerClicked?: any
  handlerBuy?: () => void
}

export default function CardPlan({
  item,
  classed,
  priceName,
  isButton,
  buttonName,
  bgPlaceholder,
  handlerClicked,
  handlerBuy,
}: IProps): ReactElement {
  return (
    <div
      // onClick={handlerClicked}
      className={
        'relative w-full md:w-1/2 lg:w-1/3 xl:w-1/3 py-2 md:py-2 lg:py-2 xl:py-4 px-2 md:px-2 lg:px-2 xl:px-4' + classed
      }
    >
      <div
        className='flex flex-col bg-white  rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 cursor-pointer z-[1] hover:-z-50'
        style={{
          backgroundImage: `url(https://sit-newtvcms.azurewebsites.net${item?.Media?.data[0]?.attributes?.formats?.small?.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '465px',
          width: '100%',
          backgroundColor: '#808080',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <div
          onClick={handlerClicked}
          style={{ width: '100%', height: '80%', backgroundColor: 'transparent', position: 'absolute' }}
        />
        <div className=' h-full flex flex-col justify-stretch'>
          <div className='w-full flex justify-start items-start flex-1 p-6'>
            <div className='bg-main h-6 px-4 rounded-lg'>
              <span className='w-full py-2 leading-none focus:outline-none pb-4 text-xs text-white font-medium '>
                {item?.time}
              </span>
            </div>
          </div>
          <div className='flex flex-col py-4 px-4 backdrop-blur-md bg-white/30 rounded-xl w-full'>
            <div className='flex justify-between'>
              <span className='text-white font-semibold'>{item?.Title_English}</span>
              <div>
                <Icon name='heart' color='#9ca3af' size='lg' />
                <span className='pl-2 text-gray-400'>{item?.favorite}</span>
              </div>
            </div>
            <div className='flex items-center py-2'>
              {item?.user && (
                <>
                  <BackgroundImage src={item.user.avatar} borderRadius='100%' />
                  <span className='text-gray-300 text-sm font-normal pl-2'>{item?.user?.fullName}</span>
                </>
              )}
              {item?.users && (
                <div className='inline-flex flex items-center'>
                  {item?.users?.map((user: any, index: number) => (
                    <div key={index} className='-m-2 first:-m-1 flex items-center'>
                      <BackgroundImage src={user?.avatar} borderRadius='100%' />
                    </div>
                  ))}
                  <span className='text-gray-300 text-sm font-normal pl-6'>{item?.users?.length}+ people place bid</span>
                </div>
              )}
            </div>
            <div className='flex justify-between'>
              <span className='w-full py-2 leading-none focus:outline-none pb-4 text-md text-gray-300 font-normal '>
                {priceName}
              </span>
              <div className={'w-36 flex items-center justify-end text-right px-3 rounded-full cursor-pointer' + bgPlaceholder}>
                <Icon name='ethereum' color='#00BCD9' size='sm' />
                <span className='w-full py-1 leading-none focus:outline-none pb-4 text-sm text-white font-medium '>
                  {item?.Quantity} ETH
                </span>
              </div>
            </div>
            {isButton && (
              <div className='w-full justify-center items-center pt-4 z-[999]'>
                <Button
                  classed='w-full border border-bluePrimary rounded-full text-white hover:bg-bluePrimary hover:text-gray-700 z-[999]'
                  button={BUTTON_TYPE.FRONT}
                  handlerBuy={handlerBuy}
                >
                  <span className='text-md font-semibold'>{buttonName}</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// import { ReactElement } from 'react'

// import BackgroundImage from '@/components/image/background-image'
// import Icon from '@/components/icon'
// import Button from '@/components/button'
// import { BUTTON_TYPE } from '@/shared/enum/button'

// interface IProps {
//   item: any
//   priceName: string
//   isButton?: boolean
//   buttonName?: string
//   classed?: string
//   bgPlaceholder?: string
//   handlerClicked?: any
//   handlerBuy?: () => void
// }

// export default function CardPlan({
//   item,
//   classed,
//   priceName,
//   isButton,
//   buttonName,
//   bgPlaceholder,
//   handlerClicked,
//   handlerBuy,
// }: IProps): ReactElement {
//   return (
//     <div
//       // onClick={handlerClicked}
//       className={'w-full md:w-1/2 lg:w-1/3 xl:w-1/3 py-2 md:py-2 lg:py-2 xl:py-4 px-2 md:px-2 lg:px-2 xl:px-4' + classed}
//     >
//       <div
//         onClick={handlerClicked}
//         className='flex flex-col bg-white  rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 cursor-pointer z-[1] hover:-z-50'
//         style={{
//           backgroundImage: `url(${item.background})`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           height: '465px',
//           width: '100%',
//           backgroundColor: '#808080',
//           zIndex: 1,
//         }}
//       >
//         <div className=' h-full flex flex-col justify-stretch'>
//           <div className='w-full flex justify-start items-start flex-1 p-6'>
//             <div className='bg-main h-6 px-4 rounded-lg'>
//               <span className='w-full py-2 leading-none focus:outline-none pb-4 text-xs text-white font-medium '>
//                 {item.time}
//               </span>
//             </div>
//           </div>
//           <div className='flex flex-col py-4 px-4 backdrop-blur-md bg-white/30 rounded-xl w-full'>
//             <div className='flex justify-between'>
//               <span className='text-white font-semibold'>{item.collectionName}</span>
//               <div>
//                 <Icon name='heart' color='#9ca3af' size='lg' />
//                 <span className='pl-2 text-gray-400'>{item.favorite}</span>
//               </div>
//             </div>
//             <div className='flex items-center py-2'>
//               {item?.user && (
//                 <>
//                   <BackgroundImage src={item.user.avatar} borderRadius='100%' />
//                   <span className='text-gray-300 text-sm font-normal pl-2'>{item.user.fullName}</span>
//                 </>
//               )}
//               {item?.users && (
//                 <div className='inline-flex flex items-center'>
//                   {item?.users?.map((user: any, index: number) => (
//                     <div key={index} className='-m-2 first:-m-1 flex items-center'>
//                       <BackgroundImage src={user.avatar} borderRadius='100%' />
//                     </div>
//                   ))}
//                   <span className='text-gray-300 text-sm font-normal pl-6'>{item?.users?.length}+ people place bid</span>
//                 </div>
//               )}
//             </div>
//             <div className='flex justify-between'>
//               <span className='w-full py-2 leading-none focus:outline-none pb-4 text-md text-gray-300 font-normal '>
//                 {priceName}
//               </span>
//               <div className={'w-36 flex items-center justify-end text-right px-3 rounded-full cursor-pointer' + bgPlaceholder}>
//                 <Icon name='ethereum' color='#00BCD9' size='sm' />
//                 <span className='w-full py-1 leading-none focus:outline-none pb-4 text-sm text-white font-medium '>
//                   {item.ETH}
//                 </span>
//               </div>
//             </div>
//             {isButton && (
//               <div className='w-full justify-center items-center pt-4 z-[999]'>
//                 <Button
//                   classed='w-full border border-bluePrimary rounded-full text-white hover:bg-bluePrimary hover:text-gray-700 z-[999]'
//                   button={BUTTON_TYPE.FRONT}
//                   handlerBuy={handlerBuy}
//                 >
//                   <span className='text-md font-semibold'>{buttonName}</span>
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
