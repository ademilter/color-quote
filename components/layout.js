import React from 'react'
import Head from 'next/head'

export default function Layout({ children, textColor, bgColor }) {
  return (
    <>
      <Head>
        <title>Color Quote</title>
      </Head>

      {children}

      <style global jsx>
        {`
          :root {
            --text-color: ${textColor};
            --bg-color: ${bgColor};
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
            font-weight: 700;
            font-size: 22px;
            line-height: 1.1;
            min-height: 100vh;
            padding: 8vmin;
            color: var(--text-color);
            background-color: var(--bg-color);
          }
          a {
            color: inherit;
          }
          cite {
            font-style: normal;
          }
        `}
      </style>
    </>
  )
}
