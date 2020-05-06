import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home Page</h1>
      <p>The following links will not work if you are logged out</p>

      <Link to="/app">App Root</Link>
      <br />

      <Link to="/app/users">User List</Link>
      <br />
      <Link to="/app/users/1">Specific User</Link>
    </Layout>
  )
}

export default IndexPage
