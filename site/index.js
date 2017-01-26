import React, { Component } from 'react'
import { render } from 'react-dom'
import SNSX from './components/SNSX'

class App extends Component {
  render () {
    return (
      <div>
        <SNSX />
      </div>
    )
  }
}

render((
  <App />
), document.getElementById('root'))
