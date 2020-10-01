import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TemplateRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("https://docs.google.com/document/d/1nGwOkRbI80hz8O51-S1R081a1Em98bWg9dj6_zQ2NMY/")
  }

  return (
    <Layout>
	<article>
	    <a href="https://docs.google.com/document/d/1nGwOkRbI80hz8O51-S1R081a1Em98bWg9dj6_zQ2NMY/">Story Template</a>
	</article>
    </Layout>
  )
}

export default TemplateRedirect
