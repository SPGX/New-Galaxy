// import { useWeb3 } from "@3rdweb/hooks"
import Balance from '@/constants/drawer/balance'
import Wallet from '@shared/json/wallet.json'

export default function Home() {
  return (
    <div>
      <Balance type={'wallet'} />

      <table className='table-auto w-full mt-10'>
        <thead>
          <tr>
            <th className='text-white'></th>
            <th className='text-white'>item</th>
            <th className='text-white'>Price</th>
            <th className='text-white'>From/Seller</th>
            <th className='text-white'>To/Bidder</th>
            <th className='text-white'>Date</th>
          </tr>
        </thead>
        <tbody>
          <>
            {Wallet.map((item, index) => (
              <>
                <tr key={index}>
                  <td className='text-grey-400 items-center'>
                    <div className='flex flex-row items-center'>
                      <img src={item.icon} width='30px' height='40px' alt='custom' className='m-2' />
                      {item.type}
                    </div>
                  </td>
                  <td className='text-grey-400 flex flex-row items-center justify-center'>
                    <img src={item.avatar} width='40px' height='40px' alt='custom' className='rounded-full m-2' />
                    <div className='flex flex-col'>
                      <h6 className='text-bluePrimary leading-3'>{item?.items?.full_name}</h6>
                      <div className='text-grey-400 leading-3'>{item?.items?.name}</div>
                    </div>
                  </td>
                  <td className='text-grey-400 text-center '>
                    <div className='flex flex-col'>
                      <h6 className='text-grey-400 leading-3'>
                        {item.price} {item.types}
                      </h6>
                      <div className='text-grey-400 leading-3'>${item.balance}</div>
                    </div>
                  </td>
                  <td className='text-grey-400 text-center'>{item.from}</td>
                  <td className='text-grey-400 text-center'>{item.to}</td>
                  <td className='text-grey-400 text-center'>
                    <div className='flex flex-col'>
                      <h6 className='leading-3'>{item.time}</h6>
                      <div className='leading-3'>{item.date}</div>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </>
        </tbody>
      </table>
    </div>
  )
}
