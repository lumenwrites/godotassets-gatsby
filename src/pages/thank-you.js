import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThankYou = () => {
  return (
    <Layout>
	<article>
	    <img  className="header-img" src={'/hermione.jpg'}/>
	    <h1>Thank you!</h1>
	    <p>Thanks for subscibing!</p>
	</article>
	<SEO title="Thank you for subscribing!" />
    </Layout>
  )
}

export default ThankYou
