import React from 'react'

export default function Quote({ quote: { content, title, link } }) {
  return (
    <blockquote>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      <footer>
        <cite>
          <a href={link} target="_blank" rel="noopener nofollow">
            {title.rendered}
          </a>
        </cite>
      </footer>

      <style jsx>{`
        footer {
          opacity: 0.6;
          font-size: 0.6em;
          margin-top: 20px;
        }
      `}</style>
    </blockquote>
  )
}
