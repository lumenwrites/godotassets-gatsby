import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://docs.google.com/document/d/1R7bOixB-1tN7U3lEi47L-NDA91CibDJ0VTgrbKO2nlQ/")
  }

  return (
    <Layout>
	<article>
	    <a href="https://docs.google.com/document/d/1R7bOixB-1tN7U3lEi47L-NDA91CibDJ0VTgrbKO2nlQ/">Adventure Template</a>
	</article>
    </Layout>
  )
}

export default TemplateRedirect
