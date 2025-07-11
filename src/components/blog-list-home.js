import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import PostCard from "./post-card"

const PostMaker = ({ data }) => (
  <section className="home-posts">
    <h2>Latest in <strong>Blog</strong> <span className="icon -right"><RiArrowDownLine/></span></h2>
    <div className="grids col-1 sm-2 lg-3" style={{ overflow: 'hidden' }}>
      {data}
    </div>
    <Link 
      className="button" 
      to="/blog"
    >
      See more<span className="icon -right"><RiArrowRightSLine/></span>
    </Link>
  </section>
)

export default function BlogListHome() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { template: { eq: "blog-post" } } }
        limit: 6
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
              featuredImage
            }
          }
        }
      }
    }`
  )

  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge =>
      <PostCard key={edge.node.id} data={edge.node} />
  )
  
  return <PostMaker data={posts} />
}