import { ReactElement, useEffect } from 'react'
import { useTypedSelector } from '@/hooks'
import { useDispatch } from 'react-redux'

import { getAllBalance } from '@/store/balance/actions'

import CardBalance from '@/components/card/card-balance'
import LoadingApi from '@/components/loading/loading-api'
import WarningApi from '@/components/warning/warning-api'

interface IProps {
  type: string
}

export default function Balance({ type }: IProps): ReactElement {
  const dispatch = useDispatch()
  const { balance, loading, error } = useTypedSelector((state) => state.balance)

  useEffect(() => {
    fetchBalance()
  }, [])

  /* @API: fetch balance */
  const fetchBalance = async () => {
    await dispatch(getAllBalance())
  }

  if (loading) return <LoadingApi />
  if (error) return <WarningApi message={error} />

  return <CardBalance type={type} cards={balance} handlerClicked={fetchBalance} />
}
