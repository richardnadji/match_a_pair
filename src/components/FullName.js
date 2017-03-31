import React, { PropTypes } from 'react'

const style = {
  textAlign: 'center',
  fontSize: '32px',
  padding: '10px 10px',
}

const FullName = props => {
  return (
    <div style={style}>
      {props.fullName}
    </div>
  )
}

FullName.propType = {
  fullName: PropTypes.string.isRequired
}

export default FullName
