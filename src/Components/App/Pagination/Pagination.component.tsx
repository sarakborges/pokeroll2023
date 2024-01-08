import { FC } from 'react'
import { Link } from 'react-router-dom'

import { PaginationProps } from './Pagination.props'
import * as Styled from './Pagination.style'

export const Pagination: FC<PaginationProps> = ({
  pagesLink,
  totalPages,
  currentPage
}) => {
  const pages = [
    ...new Set([
      1,
      currentPage - 2 > 1 ? currentPage - 2 : null,
      currentPage - 1 > 1 ? currentPage - 1 : null,

      currentPage,

      currentPage + 1 < totalPages ? currentPage + 1 : null,
      currentPage + 2 < totalPages ? currentPage + 2 : null,
      totalPages
    ])
  ].filter((pageItem) => !!pageItem)

  return (
    <>
      {pages.length > 1 && (
        <Styled.Pagination>
          {pages.map((pageItem) => (
            <Styled.PaginationItem
              key={pageItem}
              active={pageItem === currentPage}
            >
              <Link to={`${pagesLink}?page=${pageItem}`}>{pageItem}</Link>
            </Styled.PaginationItem>
          ))}
        </Styled.Pagination>
      )}
    </>
  )
}
