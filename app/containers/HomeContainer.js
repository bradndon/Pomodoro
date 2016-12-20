import React, { PropTypes } from 'react'
import Home from '../components/Home'
import CenterImage from '../components/CenterImage'
import ProgressBar from '../components/ProgressBar'


class HomeContainer extends React.Component {
  componentDidMount() {
    const element2 = document.getElementById('title2')
    element2.style.display = 'none';
  }
  handleGetStarted(event) {
    const element = document.getElementById('title')
    const element2 = document.getElementById('title2')
    var rect = element.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    element.style.display = 'none'
    element2.style.fontSize = '72px';
    element2.style.top = rect.top;
    element2.style.left = rect.left;
    element2.style.display = 'block';
    document.getElementById('content').style.opacity = 0;
    window.setTimeout(()=>{
      element2.style.top = 0;
      element2.style.left = 0;
      element2.style.fontSize = '54px'
    },10);
    window.setTimeout(()=>{
      this.context.router.push({
        pathname: '/timer',
        state: {
          milliseconds: 25*60*1000,
          completed: 0
        }
      })
    }, 1000);


  }
  render () {
    return (
      <div>
        <CenterImage
          width={100}
          height={100}
          imagesrc={"../../tomato.svg"}/>
        <Home
          onGetStarted={(event)=>this.handleGetStarted(event)}/>
        <ProgressBar
          selected={0}
          progress={0}/>
    </div>
    )
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired
}

export default HomeContainer;
