import React, { PropTypes } from 'react'
import '../sass/components/ProgressBar.scss'

const ProgressBar = (props) => {
  return (
    <div style={{width:'100%', height: '20px', position: 'absolute', bottom: '10px', paddingRight: '10px', paddingLeft:'10px', boxSizing:'border-box'}}>
      <div className={props.selected %8 == 0 ? "progressBar__piece progressBar__piece--red progressBar__piece--selected" : "progressBar__piece progressBar__piece--red"} style={{width:'19.2%'}}></div>
      <div className={props.selected %8 == 1 ? "progressBar__piece progressBar__piece--green progressBar__piece--selected" : "progressBar__piece progressBar__piece--green"} style={{width:'3.9%'}}></div>
      <div className={props.selected %8 == 2 ? "progressBar__piece progressBar__piece--red progressBar__piece--selected" : "progressBar__piece progressBar__piece--red"} style={{width:'19.2%'}}></div>
      <div className={props.selected %8 == 3 ? "progressBar__piece progressBar__piece--green progressBar__piece--selected": "progressBar__piece progressBar__piece--green"} style={{width:'3.9%'}}></div>
      <div className={props.selected %8 == 4 ? "progressBar__piece progressBar__piece--red progressBar__piece--selected" : "progressBar__piece progressBar__piece--red"} style={{width:'19.2%'}}></div>
      <div className={props.selected %8 == 5 ? "progressBar__piece progressBar__piece--green progressBar__piece--selected": "progressBar__piece progressBar__piece--green"} style={{width:'3.9%'}}></div>
      <div className={props.selected %8 == 6 ? "progressBar__piece progressBar__piece--red progressBar__piece--selected" : "progressBar__piece progressBar__piece--red"} style={{width:'19.2%'}}></div>
      <div className={props.selected %8 == 7 ? "progressBar__piece progressBar__piece--green progressBar__piece--selected": "progressBar__piece progressBar__piece--green"} style={{width: '11.5%'}}></div>

    </div>
  )
}

export default ProgressBar
