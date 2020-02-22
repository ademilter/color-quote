import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <style global jsx>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 8vmin;
            line-height: 110%;
            padding: 8vmin;
            min-height: 100vh;
            text-transform: uppercase;
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
