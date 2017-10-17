import React from 'react'
import ProjectAPI from '../src/api'
import { Link } from 'react-router-dom'

const AllProjects = () => (
  <div>
    <ul>
      {
        ProjectAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/projects/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

export default AllProjects