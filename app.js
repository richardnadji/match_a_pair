import React, { Component } from 'react'
import Title from './src/components/Title'
import Profile from './src/container/Profile'
import './App.scss'

class App extends Component {

  state = {
    user: {
      firstName: "Gal",
      lastName: "Gadot",
      photo: "http://bit.ly/2oxIq74",
      birthday: "30-04-1985",
      gender: "f"
    }
  }

  fullName = user => {
    return user.firstName + ' ' + user.lastName
  }

  render() {
    const { user } = this.state
    return(
      <div>
        <Title title="Match a Pair!" />
        <div className="card-profile">
          <div><Profile photo={user.photo} name={user.lastName} fullName={this.fullName(user)} gender={user.gender} /></div>
          <span>{user.birthday}</span>
        </div>

      </div>
    )
  }
}

export default App
