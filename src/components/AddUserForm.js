import React, { PureComponent } from 'react'

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

  onSubmit = (e) => {
    if (e) e.preventDefault()
    this.props.onAddEmail(this.state.email)
    this.setState({email: ''})
  }

  render() {
    return(
      <div className="add-user-form">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.onEmailChange}
            placeholder="email"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
