import styled from 'styled-components'

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
  }
`
