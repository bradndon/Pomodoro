import React, {PropTypes} from 'react'
import '../sass/main.scss'
import '../sass/components/CenterImage.scss'

const CenterImage = ({width, height, imagesrc}) => {
  return (
    <div className="centerImage">

      <img
      style={{width: width + "%", height:height + "%"}}
      src={imagesrc}/>
    </div>)
}

CenterImage.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  imagesrc: PropTypes.string.isRequired
}

export default CenterImage
