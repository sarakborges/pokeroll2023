import { ComponentPropsWithoutRef } from 'react'

export type FieldProps = {
  small?: boolean
  helpText?: string
  label?: string
  warning?: string
  warningVisible?: boolean
  options?: string[]
} & ComponentPropsWithoutRef<'input'> &
  ComponentPropsWithoutRef<'select'> &
  ComponentPropsWithoutRef<'textarea'>
