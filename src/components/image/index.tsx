import { ReactElement } from 'react'

interface IProps {
  src: string
  alt?: string
  width?: string
  height?: string
  classed?: string
}

export default function Image({ src, alt, width, height, classed }: IProps): ReactElement | null {
  if (!src) return null
  return <img className={classed} src={src} alt={alt} width={width} height={height} />
}
