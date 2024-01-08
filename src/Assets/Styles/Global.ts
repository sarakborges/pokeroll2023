import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --hue: 260;

    --background: hsl(var(--hue) 20% 15% / 100%);
    --backgroundDarker: hsl(var(--hue) 20% 12% / 100%);
    --modalBackground: hsl(var(--hue) 20% 15% / 70%);
    --text: hsl(var(--hue) 30% 90% / 100%);
    --textWeak: hsl(var(--hue) 30% 65% / 100%);
    --link: hsl(var(--hue) 40% 40% / 100%);

    --warningTextColor: hsl(20 70% 50% / 100%);
    --warningBgColor: hsl(20 70% 50% / 20%);

    --primaryButtonBackground: hsl(var(--hue) 35% 40% / 100%);
    --primaryButtonTextColor: hsl(var(--hue) 30% 90% / 100%);
    --primaryButtonHoverBgColor: hsl(var(--hue) 35% 55% / 100%);

    --fontFamily: "Source Sans 3", sans-serif;
    --fontColor: hsl(var(--hue) 30% 90% / 100%);
  }

  html{
    scrollbar-width: thin;
  }

  body {
    background-color: var(--background);
    
    font-family: var(--fontFamily);
    color: var(--text);
    letter-spacing: 1.5px;

    * {
      box-sizing: border-box;
      scrollbar-width: thin;
      outline: none;
      
      font-family: inherit;
      color: inherit;
      letter-spacing: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`
