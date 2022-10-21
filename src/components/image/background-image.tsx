import { ReactElement } from 'react'

interface IProps {
  src: string
  width?: string
  height?: string
  borderRadius?: string
  backgroundColor?: string
}

export default function BackgroundImage({ src, width, height, borderRadius, backgroundColor }: IProps): ReactElement | null {
  return (
    <div
      className={'flex items-center justify-center cursor-pointer'}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: height || '35px',
        width: width || '35px',
        borderRadius: borderRadius || '5%',
        backgroundColor: backgroundColor || '#808080',
      }}
    />
  )
}
