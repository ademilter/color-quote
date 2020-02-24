import React from 'react'
import Clipboard from 'simple-react-clipboard'
import stripHtml from 'string-strip-html'

import Button from './button'
import IconClose from './icon-close'
import IconTwitter from './icon-twitter'
import IconCopy from './icon-copy'

function Share({ quote, onClose }) {
  const getCurrentUrl = () => `${location.origin}/quote/${quote.id}/`

  return (
    <div className="share">
      <Button className="close" aria-label="Close Popup" onClick={onClose}>
        <IconClose />
      </Button>

      <h3>Share</h3>

      <div className="buttons">
        <a
          target="_blank"
          rel="noopener nofollow"
          href={`https://twitter.com/intent/tweet?hashtags=ColorQuote&text=${stripHtml(
            quote.content.rendered
          )}&url=${getCurrentUrl()}`}
          aria-label="Tweet Quote"
        >
          <IconTwitter /> Tweet
        </a>

        <Clipboard
          text={getCurrentUrl()}
          render={({ copy }) => {
            return (
              <Button aria-label="Copy Quote" onClick={copy}>
                <IconCopy /> Copy URL
              </Button>
            )
          }}
        />
      </div>

      <div className="info">
        <p>
          Curated by{' '}
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://twitter.com/ademilter"
          >
            @ademilter
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener nofollow"
            href="https://github.com/ademilter/color-quote"
          >
            Source Codes
          </a>{' '}
          on Github
        </p>
      </div>

      <style jsx>{`
        .share {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: var(--bg-color);
          padding: 30px;
          text-align: center;
        }
        .share :global(.close) {
          position: fixed;
          right: 30px;
          top: 30px;
          background-color: transparent;
          color: inherit;
        }
        h3 {
          font-size: 8vmin;
          text-transform: uppercase;
        }
        .buttons {
          margin-top: 50px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }
        .buttons > :global(*) {
          text-decoration: none;
          margin: 10px;
          display: flex;
          align-items: center;
          background-color: var(--text-color);
          color: var(--bg-color);
          border-radius: 5px;
          padding: 20px 30px;
        }
        .buttons :global(svg) {
          margin-right: 10px;
        }
        .info {
          line-height: 1.6;
          margin-top: 120px;
        }
      `}</style>
    </div>
  )
}

export default Share
