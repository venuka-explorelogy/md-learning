import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="container" style={{ width: "100%", height: "94vh", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "42px", fontWeight: 700, textAlign: "center" }}>
        Click Blog tab to see blog posts
     </div>
    </div>
  </Layout>
)

export default IndexPage
