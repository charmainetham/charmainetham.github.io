import React from 'react'
import ProjectAPI from '../src/api'
import { Link } from 'react-router-dom'

const Project = (props) => {
  const project = ProjectAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!project) {
    return <div>Sorry, but the project was not found</div>
  }
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>Description:</h2>
      <p> {project.description}</p>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

export default Project