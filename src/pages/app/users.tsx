import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import users from "../../users.json"
import { useAuthRoute } from "../../hooks/use-auth-route"

export default function Users() {
  useAuthRoute()

  return (
    <Layout>
      <h1>User List</h1>
      <ul>
        {users.map(user => {
          return (
            <li>
              <Link to={`/app/users/${user.id}`}>{user.first}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
