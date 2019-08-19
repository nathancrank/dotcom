/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "./layout.css"
import "../fonts/gingham/gingham.css"

const Layout = ({ children }) => {
  return (
    <>
    	<Helmet>
    		<meta width="device-width, initial-scale=1, shrink-to-fit=no, cover" />
    	</Helmet>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
