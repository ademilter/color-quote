import React from 'react'
import fetch from 'isomorphic-unfetch'
import colorCheck from 'color'

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
  const [currentUrl, setCurrentUrl] = React.useState(null)
  const [quote, setQuote] = React.useState(initialQuote)
  const [waitQuote, setWaitQuote] = React.useState(false)

  const [color, setColor] = React.useState(null)
  const [bgColor, setBgColor] = React.useState(null)

  React.useEffect(() => {
    if (!quote.id && !color && !bgColor) return
    setCurrentUrl(
      `${location.origin}/quote/${quote.id}/?color=${color}&bgColor=${bgColor}`
    )
  }, [quote, color, bgColor])

  React.useEffect(() => {
    changeColor()
  }, [])

  const changeColor = () => {
    const color = convertColor(allColor.colors[random()])
    const bg = convertColor(allColor.colors[random()])

    const _color = colorCheck(`rgba(${color})`)
    const _bg = colorCheck(`rgba(${bg})`)
    const score = _color.contrast(_bg)
    console.log(color, bg, score)

    if (score < 2) {
      changeColor()
    } else {
      setColor(color)
      setBgColor(bg)
    }
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
        currentUrl={currentUrl}
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
