import React from 'react'
import fetch from 'isomorphic-unfetch'

import { quoteUrl } from '../utils/helper'

import Layout from '../components/layout'
import Quote from '../components/quote'

QuotePage.getInitialProps = async ({ query }) => {
  const quote = await fetch(quoteUrl(query.id)).then(response => response.json())
  return { ...query, quote }
}

function QuotePage({ color, bgColor, quote }) {
  return (
    <Layout>
      <Quote quote={quote} />

      <style global jsx>
        {`
          body {
            color: rgba(${color});
            background-color: rgba(${bgColor});
          }
        `}
      </style>
    </Layout>
  )
}

export default QuotePage
