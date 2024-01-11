import styled from 'styled-components'

export const BackofficeHomeTemplate = styled.div`
  display: flex;
  flex-flow: column;
  gap: 24px;
  flex: 1;

  padding: 40px;
`

export const Dashboard = styled.ul`
  display: flex;
  gap: 24px;

  > li {
    display: flex;
    flex-flow: column;
    place-items: center;
    gap: 24px;

    padding: 24px;

    background-color: var(--backgroundDarker);
    border-radius: 24px;

    > img {
      border-radius: 100%;
    }

    > section {
      display: flex;
      flex-flow: column;
      place-items: center;
      gap: 8px;
    }
  }
`
