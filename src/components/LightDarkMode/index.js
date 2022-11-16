// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {b: 'container', text: 'Light Mode', title: 'black-heading'}

  changeStatus = () => {
    const {b} = this.state

    if (b === 'container') {
      this.setState({b: 'dark', text: 'Dark Mode', title: 'white-heading'})
    } else {
      this.setState({
        b: 'container',
        text: 'Light Mode',
        title: 'black-heading',
      })
    }
  }

  render() {
    const {b, text, title} = this.state
    return (
      <div className={b}>
        <h1 className={title}>welcome</h1>

        <button type="button" onClick={this.changeStatus}>
          {text}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
