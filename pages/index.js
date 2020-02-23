import React from 'react'
import fetch from 'isomorphic-unfetch'

import { getColor, quoteUrl } from '../utils/helper'

import Controllers from '../components/controllers'
import Quote from '../components/quote'
import Layout from '../components/layout'

IndexPage.getInitialProps = async () => {
  const response = await fetch(quoteUrl())
  const data = await response.json()
  const colors = getColor()

  return {
    quote: data[0],
    textColor: colors.text,
    bgColor: colors.bg
  }
}

function IndexPage({
  quote: initialQuote,
  textColor: initialTextColor,
  bgColor: initialBgColor
}) {
  const [quote, setQuote] = React.useState(initialQuote)
  const [waitQuote, setWaitQuote] = React.useState(false)
  const [textColor, setTextColor] = React.useState(initialTextColor)
  const [bgColor, setBgColor] = React.useState(initialBgColor)

  const changeColor = () => {
    const colors = getColor()
    setTextColor(colors.text)
    setBgColor(colors.bg)
  }

  const getQuote = async () => {
    try {
      setWaitQuote(true)
      const response = await fetch(quoteUrl())
      const data = await response.json()
      return data[0]
    } catch (e) {
      console.log(e)
    } finally {
      setWaitQuote(false)
    }
  }

  const changeQuote = async () => {
    setQuote(await getQuote())
  }

  return (
    <Layout textColor={textColor} bgColor={bgColor}>
      <Quote quote={quote} />

      <Controllers
        quote={quote}
        wait={waitQuote}
        onChangeColor={changeColor}
        onChangeQuote={changeQuote}
      />
    </Layout>
  )
}

export default IndexPage
