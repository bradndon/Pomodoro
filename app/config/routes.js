import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Main from '../containers/Main'
import TimerContainer from '../containers/TimerContainer'
import BreakContainer from '../containers/BreakContainer'
import HomeContainer from '../containers/HomeContainer'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer}/>
      <Route path='/timer' component={TimerContainer}/>
      <Route path='/break' component={BreakContainer}/>
    </Route>
  </Router>
)
