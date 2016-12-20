import React, { PropTypes } from 'react'
import CenterImage from './CenterImage'

const Home = ({onGetStarted}) => {
    return (
        <div className='timer'>
          <h1 id="title" className="timer__text">Pomodoro Timer</h1>
            <h1 id="title2" className="timer__text timer__text--top">Pomodoro Timer</h1>

          <p id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pharetra faucibus auctor. Praesent volutpat elit ante, at vestibulum
          nibh egestas in. Proin ut fringilla purus. Aliquam non nisl lobortis,
          efficitur ipsum et, aliquam velit. Nulla elementum sagittis dui
          sed molestie. Duis in sodales augue. </p>
          <button className='timer__button timer__button--start' onClick={onGetStarted}>Get Started</button>
        </div>


    )
}

Home.propTypes = {
  onGetStarted: PropTypes.func.isRequired
}

export default Home
