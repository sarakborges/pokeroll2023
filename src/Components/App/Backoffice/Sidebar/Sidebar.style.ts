import styled, { css } from 'styled-components'

const SidebarLinksStyle = css`
  display: flex;

  padding: 24px;

  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primaryButtonBackground);
  }
`

export const AuthedSide = styled.aside`
  display: flex;
  flex-flow: column;
  place-content: space-between;

  width: 280px;
  min-height: 100%;

  background-color: var(--backgroundDarker);

  > p {
    > a {
      ${SidebarLinksStyle}
    }
  }
`

export const AuthedSideMenu = styled.div`
  > p {
    padding: 24px;
  }

  > ul {
    display: flex;
    flex-flow: column;
  }
`

interface AuthedSidMenuItemProps {
  active?: boolean
}
export const AuthedSidMenuItem = styled.li<AuthedSidMenuItemProps>`
  > p {
    > a {
      ${SidebarLinksStyle}
      padding: 16px 24px;

      background-color: ${({ active }) =>
        active ? `var(--primaryButtonBackground)` : 'transparent'};
    }
  }
`
