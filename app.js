import React, { Component } from 'react'
import Title from './src/components/Title'
import Profile from './src/container/Profile'
import AddUserForm from './src/components/AddUserForm'
import './App.scss'

class App extends Component {

  state = {
    users: [
      {
        email: "galgadot@test.com",
        firstName: "Gal",
        lastName: "Gadot",
        photo: "http://bit.ly/2oxIq74",
        birthday: "30-04-1985",
        gender: "f",
      },
      {
        email: "chrispine@test.com",
        firstName: "Chris",
        lastName: "Pine",
        photo: "http://bit.ly/2nOdFvG",
        birthday: "26-08-1980",
        gender: "m",
      },
    ]
  }

  fullName = user => {
    return user.firstName + ' ' + user.lastName
  }

  onAddUser = email => {
    this.state.users.push({email: email, firstName: "John", lastName: "Doe", photo: "http://default.pic", birthday: "00-00-0000", gender: "f"})
    this.setState(this.state)
  }

  render() {
    const { users } = this.state

    return(
      <div>
        <Title title="Match a Pair!" />

          {users.map(function(user) {
            return(
              <div className="card-profile">
                <Profile
                  photo={user.photo}
                  name={user.lastName}
                  key={user.index}
                  fullName={this.fullName(user)}
                  gender={user.gender}
                />
                <span>{user.birthday}</span>
                <span>{user.email}</span>
              </div>
            )
          }.bind(this))}

        <AddUserForm onAddEmail={this.onAddUser} />

      </div>
    )
  }
}

export default App
