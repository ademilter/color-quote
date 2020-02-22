import React from 'react'
import fetch from 'isomorphic-unfetch'

import { convertColor, randomNumber, quoteUrl } from '../utils/helper'
import allColor from '../colors'

import Controllers from '../components/controllers'
import Quote from '../components/quote'
import Layout from '../components/layout'

const random = randomNumber(allColor.colors.length)

IndexPage.getInitialProps = async () => {
  const response = await fetch(quoteUrl())
  const data = await response.json()
  return { quote: data[0] }
}

function IndexPage({ quote: initialQuote }) {
  const [quote, setQuote] = React.useState(initialQuote)
  const [waitQuote, setWaitQuote] = React.useState(false)

  const [color, setColor] = React.useState(
    convertColor(allColor.colors[random()])
  )
  const [bgColor, setBgColor] = React.useState(
    convertColor(allColor.colors[random()])
  )

  const onShare = () => {
    return `${location.origin}/${quote.id}/?color=${color}&bgColor=${bgColor}`
  }

  const changeColor = () => {
    setColor(convertColor(allColor.colors[random()]))
    setBgColor(convertColor(allColor.colors[random()]))
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
    <Layout>
      <Quote quote={quote} />

      <Controllers
        wait={waitQuote}
        onChangeColor={changeColor}
        onChangeQuote={changeQuote}
      />

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

export default IndexPage
