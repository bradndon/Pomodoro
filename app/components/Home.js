import React, { PropTypes } from 'react'
import CenterImage from './CenterImage'

const Home = ({onGetStarted}) => {
    return (
      <div>
        <CenterImage
        width={100}
        height={100}
        imagesrc={"../../tomato.svg"}/>
        <div className='timer'>
          <h1 className="timer__text">Pomodoro Timer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pharetra faucibus auctor. Praesent volutpat elit ante, at vestibulum
          nibh egestas in. Proin ut fringilla purus. Aliquam non nisl lobortis,
          efficitur ipsum et, aliquam velit. Nulla elementum sagittis dui
          sed molestie. Duis in sodales augue. </p>
          <button className='timer__button timer__button--start' onClick={onGetStarted}>Get Started</button>
        </div>
      </div>

    )
}

export default Home
