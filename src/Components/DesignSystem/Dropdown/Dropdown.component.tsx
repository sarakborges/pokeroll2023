import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Times } from '@styled-icons/typicons/Times'

import { DropdownProps } from './Dropdown.props'

import { Text, Button } from '@/Components/DesignSystem'

import * as Styled from './Dropdown.style'

export const Dropdown = forwardRef<
  {
    toggleDropdown: () => void
  },
  DropdownProps
>((dropdownProps, dropdownRef) => {
  const { children, wrapperRef, hasCloseButton, title } = dropdownProps

  const [isOpen, setIsOpen] = useState(false)

  const closeDropdown = () => {
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (
      !wrapperRef?.current ||
      wrapperRef?.current?.contains(e.target as Node)
    ) {
      return
    }

    closeDropdown()
  }

  useImperativeHandle(
    dropdownRef,

    () => ({
      toggleDropdown
    })
  )

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  })

  return (
    <Styled.Dropdown isOpen={isOpen}>
      <Styled.Header>
        <Text bold>{title}</Text>

        {hasCloseButton && (
          <Styled.CloseButton>
            <Button round onClick={closeDropdown}>
              <Times />
            </Button>
          </Styled.CloseButton>
        )}
      </Styled.Header>

      <div>{children}</div>
    </Styled.Dropdown>
  )
})

Dropdown.displayName = 'Dropdown'
