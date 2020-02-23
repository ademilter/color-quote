import React from 'react'
import fetch from 'isomorphic-unfetch'

import { getColor, quoteUrl } from '../../utils/helper'

import Layout from '../../components/layout'
import Quote from '../../components/quote'

QuotePage.getInitialProps = async ({ query }) => {
  const response = await fetch(quoteUrl(query.id))
  const data = await response.json()
  const colors = getColor()
  return {
    quote: data,
    textColor: colors.text,
    bgColor: colors.bg
  }
}

function QuotePage({ quote, textColor, bgColor }) {
  return (
    <Layout textColor={textColor} bgColor={bgColor}>
      <Quote quote={quote} />
    </Layout>
  )
}

export default QuotePage
