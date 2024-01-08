import { ReactNode, RefObject } from 'react'

export interface ModalProps {
  title?: string
  children: ReactNode
  hasCloseButton?: boolean
}
