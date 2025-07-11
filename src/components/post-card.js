import React from "react"
import { Link } from "gatsby"

const PostCard = ({ data }) => (
  <article className="post-card">
    {data.frontmatter.featuredImage ? 
      (
        <Link to={data.frontmatter.slug}>
          <img 
            src={data.frontmatter.featuredImage}
            alt={data.frontmatter.title + ' - Featured image'}
            className="featured-image"
          />
        </Link>
      ) : ""
    }
    <div className="post-content">
      <h2 className="title">
        <Link to={data.frontmatter.slug}>
          {data.frontmatter.title}
        </Link>
      </h2>
      <p className="meta">
        <time>{data.frontmatter.date}</time>
      </p>
    </div>
  </article>
)

export default PostCard