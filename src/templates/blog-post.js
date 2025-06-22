import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from 'disqus-react'
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useReadingTime } from "../hooks/useReadingTime"

const Pagination = props => (
  <div className="pagination">
    <ul>
      {props.previous && (
        <li>
          <Link to={props.previous.frontmatter.slug} rel="prev">
            <span className="icon -left"><RiArrowLeftLine/></span> Previous
          </Link>
        </li>
      )}
      {props.next && (
        <li>
          <Link to={props.next.frontmatter.slug} rel="next">
            Next <span className="icon -right"><RiArrowRightLine/></span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage || ""
  const { previous, next } = pageContext
  const readingTime = useReadingTime(html)

  let props = {
    previous,
    next
  }

  const disqusConfig = {
    shortname: 'thucldnguyen',
    config: { identifier: frontmatter.slug}
  }
  

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={Image}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <div className="post-meta">
              <time>{frontmatter.date}</time>
              <span className="reading-time">{readingTime}</span>
            </div>
          </section>
          {Image ? (
            <img 
              src={Image}
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
        </header>
        
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <DiscussionEmbed {...disqusConfig} />
      {(previous || next) && (
        <Pagination {...props} />
      )}
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark( 
      id: { eq: $id }
    ) {
      id
      html
      excerpt(pruneLength: 148)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        featuredImage
      }
    }
  }
`