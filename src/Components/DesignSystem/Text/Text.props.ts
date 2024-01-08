import { ReactNode } from 'react'

export interface TextProps {
  color?: string
  size?: 'xs' | 'sm' | 'default' | 'lg' | 'xl'
  bold?: boolean
  semibold?: boolean
  light?: boolean
  children?: ReactNode
}
