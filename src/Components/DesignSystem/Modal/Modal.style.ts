import styled, { css } from 'styled-components'

const ModalCss = css`
  & + button {
    background-color: var(--mainDark2);
  }
`

interface ModalStyleProps {
  isOpen: boolean
}
export const Modal = styled.div<ModalStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  min-height: 100vh;
  overflow: hidden auto;

  display: flex;
  place-items: center;
  place-content: center;

  background-color: var(--modalBackground);

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};

  transition: opacity 0.3s, visibility 0.3s;

  ${({ isOpen }) => isOpen && ModalCss}
`

export const Body = styled.main`
  display: flex;
  flex-flow: column;
  gap: 24px;

  width: 100%;
  max-width: 640px;
  padding: 24px 0;
  margin: 40px;

  background-color: var(--backgroundDarker);
  border-radius: 24px;
`

export const Header = styled.header`
  display: flex;
  place-content: space-between;
  place-items: center;

  padding: 0 24px;
`

export const CloseButton = styled.div`
  > button {
    aspect-ratio: 1;

    > svg {
      width: 24px;
      aspect-ratio: 1;
    }
  }
`
