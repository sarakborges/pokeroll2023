import styled from 'styled-components'

export const NewPlayerForm = styled.div`
  --mainColor: hsl(var(--hue) 35% 40% / 100%);

  --transparentButtonColor: var(--mainColor);
  --formFieldBorder: var(--mainColor);

  --formTextColor: var(--fontColor);
  --formFocusBackgroundColor: hsl(var(--hue) 35% 40% / 30%);

  display: flex;
  flex-flow: column;
  place-content: center;
  place-items: center;
  flex: 1;
  gap: 24px;

  padding: 0 24px;

  > form {
    display: flex;
    flex-flow: column;
    gap: 16px;

    width: 100%;

    > p {
      padding-bottom: 16px;
    }
  }

  > p {
    line-height: 1.4;

    > a {
      text-decoration: underline;
    }
  }
`
