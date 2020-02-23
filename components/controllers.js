import React from 'react'

import IconSun from './icon-sun'
import IconShuffle from './icon-shuffle'
import IconShare from './icon-share'
import Button from './button'
import Share from './share'

export default function Controllers({
  onChangeColor,
  onChangeQuote,
  wait,
  quote
}) {
  const [showShareModal, setShowShareModal] = React.useState(false)

  return (
    <div className="controllers">
      {showShareModal && (
        <Share quote={quote} onClose={() => setShowShareModal(false)} />
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

      {onChangeColor && (
        <Button aria-label="Change Color" onClick={onChangeColor}>
          <IconSun size={20} />
        </Button>
      )}

      <Button aria-label="Copy Quote" onClick={() => setShowShareModal(true)}>
        <IconShare size={20} />
      </Button>

      <style jsx>{`
        .controllers {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
        }
        .controllers :global(button + button) {
          margin-left: 10px;
        }
      `}</style>
    </div>
  )
}
