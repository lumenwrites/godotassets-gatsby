import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUp from "../components/elements/SignUp"
//import AdBoxes from "../components/AdBoxes"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const adventure = post.fields.category === "adventure"
  return (
    <Layout location={location}>
      <article className={adventure ? "adventure" : ""} >
        {/* {post.frontmatter.title && <h1>{post.frontmatter.title}</h1>} */}
        <MDXRenderer>{post.body}</MDXRenderer>
        <footer></footer>
      </article>
      {/* <AdBoxes /> */}
      <SignUp adventure={adventure} />
      <SEO title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
  	    category
      }
      frontmatter {
        title
        description
      }
    }
  }
`
