import React from 'react'
import Title from './src/components/Title'
import Profile from './src/container/Profile'

class App extends React.Component {
  render() {
    return(
      <div>
        <Title title="Match a Pair!" />
        <Profile />
      </div>
    )
  }
}

export default App
