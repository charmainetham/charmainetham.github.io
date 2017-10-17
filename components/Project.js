import React from 'react'
import ProjectAPI from '../src/api'
import { Link } from 'react-router-dom'
const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
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
      <img src = {images[project.photo]}></img>
      <Link to='/projects'>Back</Link>
    </div>
  )
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export default Project