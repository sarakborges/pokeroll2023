import { forwardRef, useImperativeHandle, useState } from 'react'
import { Close } from 'styled-icons/evaicons-solid'

import { ModalProps } from './Modal.props'

import { Text, Button } from '@/Components/DesignSystem'

import * as Styled from './Modal.style'

export const Modal = forwardRef<
  {
    toggleModal: () => void
  },
  ModalProps
>((modalProps, modalRef) => {
  const { children, hasCloseButton, title } = modalProps

  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  useImperativeHandle(
    modalRef,

    () => ({
      toggleModal
    })
  )

  return (
    <Styled.Modal isOpen={isOpen}>
      <Styled.Body>
        <Styled.Header>
          <Text size="lg">{title}</Text>

          {hasCloseButton && (
            <Styled.CloseButton>
              <Button round onClick={closeModal}>
                <Close />
              </Button>
            </Styled.CloseButton>
          )}
        </Styled.Header>

        <div>{children}</div>
      </Styled.Body>
    </Styled.Modal>
  )
})

Modal.displayName = 'Modal'
