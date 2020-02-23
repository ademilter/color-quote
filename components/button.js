import React from 'react'

function Button({ type = 'button', children, ...props }) {
  return (
    <>
      <button type="button" {...props}>
        {children}
      </button>

      <style jsx>{`
        button {
          cursor: pointer;
          border: 0;
          font: inherit;
          min-height: 40px;
          min-width: 40px;
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
      `}</style>
    </>
  )
}

export default Button
