import { ReactElement } from 'react'

interface IProps {}

export default function LoadingApi({}: IProps): ReactElement | null {
  return <span>loading...</span>
}
