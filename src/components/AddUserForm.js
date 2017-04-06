import React, { PureComponent } from 'react'
import Checkbox from './FormComponents/Checkbox'

export default class AddUserForm extends PureComponent {
  state = {
      email: '',
      firstName: '',
      lastName: '',
      photoUrl: '',
      birthday: '',
      gender: '',
  }

  onEmailChange = (e) => {
    const email = e.target.value
    this.setState({email: email})
  }

  onFirstNameChange = (e) => {
    const email = e.target.value
    this.setState({firstName: email})
  }

  onLastNameChange = (e) => {
    const email = e.target.value
    this.setState({lastName: email})
  }

  onPhotoUrlChange = (e) => {
    const email = e.target.value
    this.setState({photoUrl: email})
  }

  onBirthdayChange = (e) => {
    const email = e.target.value
    this.setState({birthday: email})
  }

  onGenderChange = gender => {
    this.setState({gender: gender})
  }

  onSubmit = (e) => {
    const { email, firstName, lastName, photoUrl, birthday, gender } = this.state

    if (e) e.preventDefault()
    this.props.onAdd(email, firstName, lastName, photoUrl, birthday, gender)
    this.setState({email: '',
                  firstName: '',
                  lastName: '',
                  photoUrl: '',
                  birthday: '',
                  gender: '',
    })
  }

  render() {
    return(
      <div className="add-user-form">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onEmailChange}
            placeholder="Email"
          />
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
            placeholder="First Name"
          />
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
            placeholder="Last Name"
          />
          <input
            type="text"
            value={this.state.photoUrl}
            onChange={this.onPhotoUrlChange}
            placeholder="Photo url"
          />
          <input
            type="text"
            value={this.state.birthday}
            onChange={this.onBirthdayChange}
            placeholder="Date of birth"
          />

          <Checkbox label1="male" label2="female" handleCheckbox={this.onGenderChange} />

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
