import styled from 'styled-components'

export const DeletePlayer = styled.div`
  --mainColor: hsl(var(--hue) 35% 40% / 100%);

  --transparentButtonColor: var(--mainColor);
  --formFieldBorder: var(--mainColor);

  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;
  flex: 1;
  gap: 24px;

  padding: 0 24px;

  > p {
    line-height: 1.5;
    text-align: center;
  }

  > button {
    font-size: 16px;
  }
`
