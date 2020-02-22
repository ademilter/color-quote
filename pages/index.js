import React from 'react'

import IconSun from '../components/icon-sun'
import IconShuffle from '../components/icon-shuffle'
import allColor from '../colors'
import convertColor from '../utils/convertColor'

let random = () => Math.floor(Math.random() * (allColor.colors.length - 0))
let quoteUrl = () =>
  `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${Date.now()}`

export default function IndexPage() {
  const [quote, setQuote] = React.useState(null)
  const [waitQuote, setWaitQuote] = React.useState(false)
  const [color, setColor] = React.useState(allColor.colors[random()])
  const [bgColor, setBgColor] = React.useState(allColor.colors[random()])

  const randomColor = () => {
    setColor(allColor.colors[random()])
    setBgColor(allColor.colors[random()])
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

  const randomQuote = async () => {
    setQuote(await getQuote())
  }

  React.useEffect(() => {
    randomQuote()
  }, [])

  return (
    <div className="content">
      {quote && (
        <blockquote>
          <div dangerouslySetInnerHTML={{ __html: quote.content.rendered }} />
          <footer>
            <cite>
              <a href={quote.link}>{quote.title.rendered}</a>
            </cite>
          </footer>
        </blockquote>
      )}

      <div className="controllers">
        <button type="button" className="random" onClick={randomColor}>
          <IconSun size={20} />
        </button>
        <button
          type="button"
          className="random"
          disabled={waitQuote}
          onClick={randomQuote}
        >
          <IconShuffle size={20} />
        </button>
      </div>

      <style jsx>{`
        .controllers {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
        }
        button {
          border: 0;
          font-size: 30px;
          height: 1em;
          width: 1em;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          color: black;
          box-shadow: none;
        }
        button:disabled {
          opacity: 0.5;
        }
        button + button {
          margin-left: 10px;
        }
        footer {
          margin-top: 20px;
        }
      `}</style>
      <style global jsx>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'IBM Plex Sans', sans-serif;
            color: ${convertColor(color)};
            background-color: ${convertColor(bgColor)};
            font-size: 8vmin;
            line-height: 110%;
            padding: 8vmin;
            height: 100vh;
            text-transform: uppercase;
          }
          a {
            color: inherit;
          }
        `}
      </style>
    </div>
  )
}
