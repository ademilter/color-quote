import React from 'react'

import IconSun from './icon-sun'
import IconShuffle from './icon-shuffle'
import Button from './button'

export default function Controllers({ onChangeColor, onChangeQuote, wait }) {
  return (
    <div className="controllers">
      <Button onClick={onChangeColor}>
        <IconSun size={20} />
      </Button>
      <Button disabled={wait} onClick={onChangeQuote}>
        <IconShuffle size={20} />
      </Button>

      <style jsx>{`
        .controllers {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  )
}
