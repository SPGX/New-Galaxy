import { FunctionComponent } from 'react'

import { BUTTON_TYPE } from '@/shared/enum/button'

interface IButton {
  button?: string
  handlerClicked?: () => void
  handlerBuy?: () => void
  type?: string
  classed?: string
  children: any
  disabled?: boolean
}

const Button: FunctionComponent<IButton> = ({ button, handlerClicked, children, classed, disabled, handlerBuy }) => {
  switch (button) {
    case BUTTON_TYPE.TOP_UP_BALANCE:
      return (
        <button
          type='button'
          className={'rounded-lg bg-main font-bold text-white hover:text-main w-full px-1 py-1 text-md' + classed}
          onClick={handlerClicked}
          disabled={disabled ? disabled : false}
        >
          {children}
        </button>
      )
    case BUTTON_TYPE.FRONT:
      return (
        <button type='button' className={'p-2 ' + classed} onClick={handlerBuy} disabled={disabled ? disabled : false}>
          {children}
        </button>
      )
    default:
      return (
        <button type='button' className={'p-2 ' + classed} onClick={handlerClicked} disabled={disabled ? disabled : false}>
          {children}
        </button>
      )
  }
}

export default Button
