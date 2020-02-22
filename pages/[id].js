import React from 'react'
import fetch from 'isomorphic-unfetch'

import { quoteUrl } from '../utils/helper'

import Layout from '../components/layout'
import Quote from '../components/quote'

QuotePage.getInitialProps = async ({ query }) => {
  const response = await fetch(quoteUrl(query.id))
  const data = await response.json()
  return { ...query, quote: data }
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
