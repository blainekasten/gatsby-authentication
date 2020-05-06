import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useAuthRoute } from "../hooks/use-auth-route"

const App = () => {
  useAuthRoute()

  return (
    <Layout>
      <SEO title="Home" />
      <h1>App!</h1>
    </Layout>
  )
}

export default App
