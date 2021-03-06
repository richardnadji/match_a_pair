import React, { PropTypes } from 'react'

const Title = props => {
  return <h1>{props.title}</h1>
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
