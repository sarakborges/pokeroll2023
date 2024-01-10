import styled from 'styled-components'

export const LoginTemplate = styled.div`
  --mainColor: hsl(var(--hue) 35% 40% / 100%);

  --transparentButtonColor: var(--mainColor);
  --formFieldBorder: var(--mainColor);

  --formTextColor: var(--fontColor);
  --formFocusBackgroundColor: hsl(var(--hue) 35% 40% / 30%);

  display: flex;
  place-items: center;
  place-content: center;

  width: 100%;

  > form {
    display: flex;
    flex-flow: column;
    gap: 16px;

    width: 600px;
    max-width: 100%;
    padding: 32px;

    background-color: var(--backgroundDarker);
    border-radius: 32px;
  }
`
