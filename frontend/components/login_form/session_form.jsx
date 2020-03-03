import React from 'react'
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.formAction(user)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    let email = <div></div>
    if (this.props.formType === 'Create account') {
      email = (
        <label>Email
          <input 
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
          />
        </label>
      )
    }
    return( 
      <form className="session-form" onSubmit={this.handleSubmit}>
        <label>username
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
        </label>
        <label>password
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
          />
        </label>
        {email}
        <button>Submit</button>
      </form>
    )
      
  }
  
}

export default SessionForm