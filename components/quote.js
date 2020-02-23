import React from 'react'
import stripHtml from 'string-strip-html'

export default function Quote({ quote: { content, title, link } }) {
  console.log(stripHtml(content.rendered))
  return (
    <blockquote>
      <p>{stripHtml(content.rendered)}</p>
      <footer>
        <cite>
          <a href={link} target="_blank" rel="noopener nofollow">
            {stripHtml(title.rendered)}
          </a>
        </cite>
      </footer>

      <style jsx>{`
        blockquote {
          font-size: 8vmin;
          text-transform: uppercase;
        }
        footer {
          opacity: 0.6;
          font-size: 0.6em;
          margin-top: 20px;
        }
      `}</style>
    </blockquote>
  )
}
