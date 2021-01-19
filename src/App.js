import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        // onChange={(prevState, nextState) => {
        //   if (nextState.location.action !== 'POP') {
        //     window.scrollTo(0, 0)
        //   }
        // }}
      >
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
    </Switch>
  </Router>
)

export default App
