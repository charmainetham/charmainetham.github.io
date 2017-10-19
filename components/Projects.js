import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllProjects from './AllProjects'
import Project from './Project'

const Projects = () => (
  <Switch>
    <Route exact path='/projects' component={AllProjects}/>
    <Route path='/projects/:number' component={Project}/>
  </Switch>
)


export default Projects