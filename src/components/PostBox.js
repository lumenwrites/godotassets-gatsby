import React from 'react'
import { Link } from "gatsby"


const renderTags = (tags) => {
  if (!tags) return
  tags = tags.split(',').map(t => t.trim())
  return tags.map(t => (
    <span className="tag" key={t}>{t}</span>
  ))
}
export default function PostBox({ title, description, slug, image, tags, author }) {
  console.log('author', author)
  return (
    <div className="post-box">
      <Link to={slug}>
        {image}
      </Link>
      <section className="description">
        <Link to={slug}>
          <h2  className="title">{title}</h2>
          {/* <div className="author">{author}</div> */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Link>
      </section>
      <div className="tags">
        {renderTags(tags)}
      </div>
    </div>
  )
}

