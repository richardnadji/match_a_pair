import React, { PropTypes } from 'react'
import './Avatar.scss'

const Avatar = props => {
  return <img className="img-circle" src={props.url} alt={props.name} />
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Avatar
