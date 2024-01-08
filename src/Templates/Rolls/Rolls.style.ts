import styled from 'styled-components'

export const RollsTemplate = styled.div`
  --mainColor: hsl(var(--hue) 35% 40% / 100%);

  --transparentButtonColor: var(--mainColor);
  --formFieldBorder: var(--mainColor);

  --formTextColor: var(--text);
  --formFocusBackgroundColor: hsl(var(--hue) 35% 40% / 10%);
  --formTextareaBackgroundColor: hsl(var(--hue) 35% 70% / 30%);
  --formTextareaFocusBackgroundColor: hsl(var(--hue) 35% 40% / 10%);

  flex: 1;
  display: flex;
  flex-flow: column;
  gap: 48px;
`
