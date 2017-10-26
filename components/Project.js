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
    <div className='projectContainer'>
      <div className='projectTitle'><h1>{project.name}</h1></div>
      <div className='projectDescription'>
        <h2>Description:</h2>
        <p> {project.description}</p>
      </div>
      <div className='projectImage'><img src = {images[project.photo]}></img></div>
    </div>
  )
}

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export default Project