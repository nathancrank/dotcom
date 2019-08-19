import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Torch from "../components/Torch"

const IndexPage = () => (
  <Layout>
    <SEO title="Annoyed?" />
    <Torch text="Nathan Crank" rainbow={true}/>
  </Layout>
)

export default IndexPage
