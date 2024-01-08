import styled from 'styled-components'

export const Pagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  place-content: center;
  gap: 12px;
`

interface PaginationItemProps {
  active?: boolean
}
export const PaginationItem = styled.li<PaginationItemProps>`
  > a {
    display: flex;
    place-content: center;
    place-items: center;

    width: 32px;
    aspect-ratio: 1;

    background-color: var(
      --${({ active }) => (!active ? 'primaryButtonBackground' : 'backgroundDarker')}
    );
    border-radius: 12px;

    color: var(--primaryButtonTextColor);

    pointer-events: ${({ active }) => (!active ? 'all' : 'none')};

    transition: background-color 0.3s;

    &:hover {
      background-color: var(--primaryButtonHoverBgColor);
    }
  }
`
