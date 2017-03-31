import React, { PropTypes } from 'react'
import './Avatar.scss'


const Avatar = props => {
  return <img className={'img-circle-' + props.gender} src={props.photo} alt={props.name} />
}

Avatar.propTypes = {
  gender: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Avatar
