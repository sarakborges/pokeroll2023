import styled from 'styled-components'

const Breakpoint = '1000px'

export const NonAuthedLayout = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`

interface TopbarProps {
  isOpen: boolean
}
export const Topbar = styled.header<TopbarProps>`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;

  display: flex;
  place-content: space-between;
  place-items: center;

  background-color: var(--backgroundDarker);

  > section {
    > p {
      padding: 24px;
    }
  }

  > ul {
    display: flex;
  }

  @media (min-width: ${Breakpoint}) {
    > section {
      > button {
        display: none;
      }
    }
  }

  @media (max-width: ${Breakpoint}) {
    flex-flow: column;

    > section {
      display: flex;
      place-content: space-between;
      place-items: center;

      width: 100%;
      padding: 16px;

      > button {
        aspect-ratio: 1;

        > svg {
          width: 48px;
        }
      }

      > p {
        padding: 0 12px;
      }
    }

    > ul {
      width: 100%;
      min-height: 100vh;
      max-height: 100vh;

      min-height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};
      max-height: ${({ isOpen }) => (isOpen ? '100vh' : '0')};

      overflow: hidden auto;

      flex-flow: column;

      transition: min-height 0.3s, max-height 0.3s;
    }
  }
`

interface MenuItemProps {
  active?: boolean
}
export const MenuItem = styled.li<MenuItemProps>`
  display: flex;

  > a {
    display: flex;
    place-items: center;

    height: 76px;
    padding: 0 24px;

    background-color: ${({ active }) =>
      active ? 'var(--primaryButtonBackground)' : 'transparent'};
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--primaryButtonBackground);
    }

    @media (max-width: ${Breakpoint}) {
      width: 100%;
    }
  }
`
