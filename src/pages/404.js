import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Torch from "../components/Torch"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Torch text="Nathan Crank" rainbow={true}/>
  </Layout>
)

export default NotFoundPage
