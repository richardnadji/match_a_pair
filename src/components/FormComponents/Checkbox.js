import React from 'react'

export default class Checkbox extends React.Component {

  state = {
    isChecked1: false,
    isChecked2: false,
  }

  toggleCheckbox = (e) => {
    const { handleCheckbox } = this.props
    const { isChecked1, isChecked2 } = this.state
    const checkbox = e.target

    if ( !isChecked1 && !isChecked2 ) {
      checkbox.value === "male" ? this.setState({isChecked1: true}) : this.setState({isChecked2: true})
    } else if (!checkbox.checked) {
      console.log("already clicked")
    } else {
      this.setState({isChecked1: !isChecked1, isChecked2: !isChecked2})
    }

    handleCheckbox(checkbox.value)
  }

  checkState = () => {
    console.log("isChecked1: ", !this.state.isChecked1)
    console.log("isChecked2: ", !this.state.isChecked2)
  }

  render() {
    const { label1, label2 } = this.props
    const { isChecked1, isChecked2 } = this.state

    return(
      <div className="checkbox">
        <label>
          <input type="checkbox"
            value={label1}
            checked={isChecked1}
            onChange={this.toggleCheckbox}
          />
          {label1}
        </label>
        <label>
          <input type="checkbox"
            value={label2}
            checked={isChecked2}
            onChange={this.toggleCheckbox}
          />
          {label2}
        </label>
      </div>
    )
  }
}
