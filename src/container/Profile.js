import React, { PropTypes } from 'react'
import Avatar from '../components/Avatar'
import FullName from '../components/FullName'


const Profile = props => {
  return(
    <div className="profile">
      <Avatar photo={props.photo} name={props.name} gender={props.gender} />
      <FullName fullName={props.fullName} />
    </div>
  )
}


Profile.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired
}

export default Profile
