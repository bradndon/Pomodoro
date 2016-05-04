import React, { PropTypes, Component } from 'react'
import '../sass/components/ProgressBar.scss'

class ProgressBar extends Component {
  componentDidMount() {
    window.setTimeout(()=>{
      document.getElementById('prog' + this.props.selected%8).classList.add('progressBar__piece--selected');
    },10);
  }
  render(){
    return(
    <div style={{width:'100%', height: '20px', position: 'absolute', bottom: '10px', paddingRight: '10px', paddingLeft:'10px', boxSizing:'border-box'}}>
      <div id='prog0' className="progressBar__piece progressBar__piece--red" style={{width:'19.2%'}}></div>
      <div id='prog1' className="progressBar__piece progressBar__piece--green" style={{width:'3.9%'}}></div>
      <div id='prog2' className="progressBar__piece progressBar__piece--red" style={{width:'19.2%'}}></div>
      <div id='prog3' className="progressBar__piece progressBar__piece--green" style={{width:'3.9%'}}></div>
      <div id='prog4' className="progressBar__piece progressBar__piece--red" style={{width:'19.2%'}}></div>
      <div id='prog5' className="progressBar__piece progressBar__piece--green" style={{width:'3.9%'}}></div>
      <div id='prog6' className="progressBar__piece progressBar__piece--red" style={{width:'19.2%'}}></div>
      <div id='prog7' className="progressBar__piece progressBar__piece--green" style={{width: '11.5%'}}></div>

    </div>
  )}
}

export default ProgressBar
