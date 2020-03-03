import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'

class DemoForm extends React.Component {

  componentDidMount() {
    this.props.login(this.props.user)
  }

  render() {
    return <NavBarContainer />
  }
}

export default DemoForm