import React, { PropTypes } from 'react'
import Home from '../components/Home'

class HomeContainer extends React.Component {
  handleGetStarted() {
    this.context.router.push({
      pathname: '/timer',
      state: {
        milliseconds: 25*60*1000
      }
    })
  }
  render () {
    return <Home
      onGetStarted={()=>this.handleGetStarted()}/>
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default HomeContainer;
