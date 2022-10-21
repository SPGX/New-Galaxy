import { ReactElement, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

interface IProps {
  name: string
  color?: string
  size?: SizeProp
}

export default function Icon({ name, color, size }: IProps): ReactElement | null {
  const [isColor, setIsColor] = useState<string>('#6b7280')
  const [isSize, setIsSize] = useState<SizeProp>('xs')

  useEffect(() => {
    if (color) setIsColor(color)
  }, [color])

  useEffect(() => {
    if (size) setIsSize(size)
  }, [size])

  switch (name) {
    case 'search':
      return <FontAwesomeIcon icon={['fas', 'search']} size={isSize} color={isColor} />
    case 'bell':
      return <FontAwesomeIcon icon={['fas', 'bell']} size={isSize} color={isColor} />
    case 'chevron-down':
      return <FontAwesomeIcon icon={['fas', 'chevron-down']} size={isSize} color={isColor} />
      case 'chevron-up':
      return <FontAwesomeIcon icon={['fas', 'chevron-up']} size={isSize} color={isColor} />
    case 'chevron-right':
      return <FontAwesomeIcon icon={['fas', 'chevron-right']} size={isSize} color={isColor} />
    case 'chevron-left':
      return <FontAwesomeIcon icon={['fas', 'chevron-left']} size={isSize} color={isColor} />
    case 'ethereum':
      return <FontAwesomeIcon icon={['fab', 'ethereum']} size={isSize} color={isColor} />
    case 'plus':
      return <FontAwesomeIcon icon={['fas', 'plus']} size={isSize} color={isColor} />
    case 'info-circle':
      return <FontAwesomeIcon icon={['fas', 'info-circle']} size={isSize} color={isColor} />
    case 'heart':
      return <FontAwesomeIcon icon={['far', 'heart']} size={isSize} color={isColor} />
    case 'line-up':
      return <FontAwesomeIcon icon={['fas', 'arrow-trend-up']} size={isSize} color={isColor} />
    case 'line-down':
      return <FontAwesomeIcon icon={['fas', 'arrow-trend-down']} size={isSize} color={isColor} />
    case 'down':
      return <FontAwesomeIcon icon={['fas', 'chevron-down']} size={isSize} color={isColor} />
    case 'earth-americas':
      return <FontAwesomeIcon icon={['fas', 'globe']} size={isSize} color={isColor} />
      case 'minus':
      return <FontAwesomeIcon icon={['fas', 'minus']} size={isSize} color={isColor} />
    default:
      return null
  }
}

