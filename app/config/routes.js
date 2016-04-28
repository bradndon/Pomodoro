import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Main from '../containers/Main'
import TimerContainer from '../containers/TimerContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/timer/:time' component={TimerContainer}/>
    </Route>
  </Router>
)
