import { css } from "@emotion/react"

export const GlobalStyles = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: keep-all;
    word-wrap: break-word;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    line-height: 1.6;
    letter-spacing: -0.03em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.3;
    margin-bottom: 0.8em;
    font-weight: 600;
  }

  p {
    line-height: 1.7;
  }

  ul,
  ol {
    padding-left: 1.2em;
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 0.5em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    cursor: pointer;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`
