import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { useAuthRoute } from "../hooks/use-auth-route"

const App = () => {
  useAuthRoute()

  return (
    <Layout>
      <h1>App!</h1>
      <p>The following links WORK!</p>

      <Link to="/app/users">User List</Link>
      <br />
      <Link to="/app/users/1">Specific User</Link>
    </Layout>
  )
}

export default App
