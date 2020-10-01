import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/elements/SignUp"
//import AdBoxes from "../components/AdBoxes"

const renderTags = (tags) => {
  if (!tags) return
  tags = tags.split(',').map(t => t.trim())
  return tags.map(t => (
    <span className="tag" key={t}>{t}</span>
  ))
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  console.log('File', post.frontmatter)
  return (
    <Layout location={location}>
      <article className={"asset"} >
        <div className="preview-info-wrapper">
          <div className="header-img">
            <Img fluid={{ ...post.frontmatter.image.childImageSharp.fluid, aspectRatio: 16 / 9 }} />
          </div>
          <div className="info">
            <h1 className="title">{post.frontmatter.title}</h1>
            <div className="short-description">{post.frontmatter.description}</div>
            <br />
            <a className="btn btn-cta large full-width" href={`${post.frontmatter.assetFile}`}>
              Download
            </a>
          </div>
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
        <div className="tags">
          {renderTags(post.frontmatter.tags)}
          <div className="author">@{post.frontmatter.author}</div>
        </div>
      </article>
      <SignUp />
      {/* <AdBoxes /> */}

      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query AssetBySlug($slug: String!) {
      mdx(fields: {slug: {eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
          category
        }
      frontmatter {
        title
        description
        assetFile
        image {
          childImageSharp {
            original { src }
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tags
        author
      }
    }
  }
`
