import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/resume' component={Resume}/>
    </Switch>
  </main>
)

export default Main