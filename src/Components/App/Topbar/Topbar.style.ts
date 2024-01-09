import styled from 'styled-components'

const Breakpoint = '1000px'

export const NonAuthedLayout = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
`

export const Topbar = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;

  display: flex;
  place-content: space-between;
  place-items: center;

  background-color: var(--backgroundDarker);

  > p {
    padding: 24px;
  }

  > ul {
    display: flex;
  }

  @media (max-width: ${Breakpoint}) {
    position: static;

    > p {
      display: none;
    }

    > ul {
      width: 100%;
      min-height: 100vh;
      max-height: 100vh;
      overflow: hidden auto;

      flex-flow: column;
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
