import React from 'react'

export default function Quote({ quote: { content, title, link } }) {
  return (
    <blockquote>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      <footer>
        <cite>
          <a href={link}>{title.rendered}</a>
        </cite>
      </footer>

      <style jsx>{`
        footer {
          margin-top: 20px;
        }
      `}</style>
    </blockquote>
  )
}
