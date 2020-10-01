import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/elements/SignUp"
import PostBox from "../components/PostBox"

const BlogIndex = ({ data, location, pageContext }) => {
  const posts = data.allMdx.edges
  var categoryTitle = pageContext.category
  /* Capitalize */
  categoryTitle = categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)
  return (
    <Layout location={location}>
      <div className="post-grid">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          let image
          if (node.frontmatter.image) {
            image = <Img fluid={{ ...node.frontmatter.image.childImageSharp.fluid, aspectRatio: 16 / 9 }} />
          }
          return (
            <PostBox
              image={image}//{node.frontmatter.image ? node.frontmatter.image.childImageSharp.original.src : ""}
              title={title}
              description={node.frontmatter.description || node.excerpt}
              author={node.frontmatter.author}
              tags={node.frontmatter.tags || []}
              slug={node.fields.slug}
              key={node.fields.slug} />
          )
        })}
      </div>
      <div className="wip-note">This website is still work in progress.<br/>More assets are coming soon...</div>
      <SignUp />
      <SEO title={`${categoryTitle}s`} />
    </Layout>
  )
}


export default BlogIndex

export const pageQuery = graphql`
  query PostsByCategory($category: String!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { category: { eq: $category }  draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
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
    }
  }
`
