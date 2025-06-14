/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightLine, RiArrowLeftLine } from "react-icons/ri"
import { DiscussionEmbed } from "disqus-react"

import Layout from "../components/layout"
import SEO from '../components/seo'
import { useReadingTime } from '../hooks/useReadingTime'

const styles = {
  'article blockquote': {
    'background-color': 'cardBg'
  },
  pagination: {
    'a': {
      color: 'muted',
      '&.is-active': {
        color: 'text'
      },
      '&:hover': {
        color: 'text'
      }
    }
  }
}

const Pagination = (props) => (
  <div 
    className="pagination -post"
    sx={styles.pagination}
  >
    <ul>
        {(props.previous && props.previous.frontmatter.template === 'blog-post') && (
          <li>
              <Link to={props.previous.frontmatter.slug} rel="prev">
                <p
                  sx={{
                    color: 'muted'
                  }}
                >
                  <span className="icon -left"><RiArrowLeftLine/></span> Previous</p>
                <span className="page-title">{props.previous.frontmatter.title}</span>
              </Link>
          </li>
        )}
        {(props.next && props.next.frontmatter.template === 'blog-post') && (
          <li>
            <Link to={props.next.frontmatter.slug} rel="next">
              <p
                sx={{
                  color: 'muted'
                }}
              >Next <span className="icon -right"><RiArrowRightLine/></span></p>
              <span className="page-title">{props.next.frontmatter.title}</span>
            </Link>
          </li>
        )}
    </ul>
  </div>
)

const Post = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.gatsbyImageData : ""
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
              <span className="reading-time" sx={{ ml: 3 }}>{readingTime}</span>
            </div>
          </section>
          {Image ? (
            <GatsbyImage 
              image={Image}
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
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 1980
              height: 968
              quality: 80
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
    }
  }
`