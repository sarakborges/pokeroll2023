import { ComponentPropsWithoutRef } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  primary?: boolean
  secondary?: boolean
  transparent?: boolean
  round?: boolean
  nopad?: boolean
}
