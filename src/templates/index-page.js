import React from "react"
import { graphql, Link } from "gatsby"
import { RiArrowRightSLine } from "react-icons/ri"
import { RiFacebookBoxFill, RiTwitterFill, RiLinkedinBoxFill, RiYoutubeFill, RiInstagramFill, RiRssFill, RiGithubFill, RiTelegramFill, RiPinterestFill, RiSnapchatFill, RiSkypeFill,RiDribbbleFill, RiMediumFill, RiBehanceFill} from "react-icons/ri";
import { FaWordpress, FaVk} from "react-icons/fa";

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"
import Icons from "../util/socialmedia.json"

export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage || ""
  const sIcons = Icons.socialIcons.map(icons => {
    return(
      <div key={icons.icon}>
        { icons.icon === "facebook" ? (<Link to={icons.url} target="_blank"><RiFacebookBoxFill/></Link>) :"" }
        { icons.icon === "twitter" ? (<Link to={icons.url} target="_blank"><RiTwitterFill/></Link>) : "" }
        { icons.icon === "linkedin" ? (<Link to={icons.url} target="_blank"><RiLinkedinBoxFill/></Link>) : "" }
        { icons.icon === "youtube" ? (<Link to={icons.url} target="_blank"><RiYoutubeFill/></Link>) : ""}
        { icons.icon === "instagram" ? (<Link to={icons.url} target="_blank"><RiInstagramFill/></Link>) :"" }
        { icons.icon === "rss" ? (<Link to={icons.url} target="_blank"><RiRssFill/></Link>) : "" }
        { icons.icon === "github" ? (<Link to={icons.url} target="_blank"><RiGithubFill/></Link>) : "" }
        { icons.icon === "telegram" ? (<Link to={icons.url} target="_blank"><RiTelegramFill/></Link>) : "" }
        { icons.icon === "pinterest" ? (<Link to={icons.url} target="_blank"><RiPinterestFill/></Link>) : "" }
        { icons.icon === "snapchat" ? (<Link to={icons.url} target="_blank"><RiSnapchatFill/></Link>) : "" }
        { icons.icon === "skype" ? (<Link to={icons.url} target="_blank"><RiSkypeFill/></Link>) : "" }
        { icons.icon === "wordpress" ? (<Link to={icons.url} target="_blank"><FaWordpress/></Link>) : "" }
        { icons.icon === "dribbble" ? (<Link to={icons.url} target="_blank"><RiDribbbleFill/></Link>) : "" }
        { icons.icon === "medium" ? (<Link to={icons.url} target="_blank"><RiMediumFill/></Link>) : "" }
        { icons.icon === "behance" ? (<Link to={icons.url} target="_blank"><RiBehanceFill/></Link>) : "" }
        { icons.icon === "vk" ? (<Link to={icons.url} target="_blank"><FaVk/></Link>) : "" }
      </div>
    )
  })
	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{frontmatter.title}</h1>
          <p className="tagline">
            {frontmatter.tagline}
          </p>
          <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
          <Link 
            to={frontmatter.cta.ctaLink} 
            className="button"
          >
            {frontmatter.cta.ctaText}<span className="icon -right"><RiArrowRightSLine/></span>
          </Link>
          <div className="social-icons">
            {sIcons}
          </div>
        </div>
        <div>
          {Image ? (
            <img
              src={Image}
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
        </div>
      </div>
      <BlogListHome/>
		</Layout>
	)
}

export default HomePage
