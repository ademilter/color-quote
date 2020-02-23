import React from 'react'
import Clipboard from 'simple-react-clipboard'

import IconSun from './icon-sun'
import IconShuffle from './icon-shuffle'
import IconCopy from './icon-copy'
import Button from './button'
import useInterval from '../hooks/interval'

export default function Controllers({
  onChangeColor,
  onChangeQuote,
  wait,
  currentUrl
}) {
  const [timer, setTimer] = React.useState(0)

  useInterval(
    () => {
      setTimer(timer - 1)
    },
    timer === 0 ? undefined : 1000
  )

  return (
    <div className="controllers">
      {timer > 0 && <div className="copy-feedback">Copied!</div>}

      {onChangeColor && (
        <Button aria-label="Change Color" onClick={onChangeColor}>
          <IconSun size={20} />
        </Button>
      )}
      {onChangeQuote && (
        <Button
          aria-label="Change Quote"
          disabled={wait}
          onClick={onChangeQuote}
        >
          <IconShuffle size={20} />
        </Button>
      )}
      {currentUrl && (
        <Clipboard
          text={currentUrl}
          onSuccess={() => {
            setTimer(2)
          }}
          render={({ copy }) => {
            return (
              <Button aria-label="Copy Quote" onClick={copy}>
                <IconCopy size={20} />
              </Button>
            )
          }}
        />
      )}

      <style jsx>{`
        .controllers {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
        }
        .copy-feedback {
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          font-size: 10vw;
          background-color: white;
          color: black;
          padding: 30px;
          border-radius: 5px;
        }
        .controllers :global(button + button) {
          margin-left: 10px;
        }
      `}</style>
    </div>
  )
}
