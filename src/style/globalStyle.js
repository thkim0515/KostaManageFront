import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .content {
    flex: 1;
  }

  /* 미디어 쿼리 */
  
  @media (max-width: 600px) {
    html {
      font-size: 50%;
    }
  }

  @media (min-width: 601px) and (max-width: 768px) {
    html {
      font-size: 55%;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) {
    html {
      font-size: 60%;
    }
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    html {
      font-size: 62.5%;
    }
  }

  @media (min-width: 1201px) {
    html {
      font-size: 65%;
    }
  }
`;

export default GlobalStyle;
