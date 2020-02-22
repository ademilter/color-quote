import React from 'react'

function Button({ type = 'button', children, ...props }) {
  return (
    <>
      <button type="button" {...props}>
        {children}
      </button>

      <style jsx>{`
        button {
          border: 0;
          font-size: 40px;
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
      `}</style>
    </>
  )
}

export default Button
