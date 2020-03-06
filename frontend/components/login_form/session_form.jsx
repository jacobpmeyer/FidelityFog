import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { demoUser } from '../../util/demo_user'


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
    this.props.formAction(user).then(() => this.props.closeModal())
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleDemo() {
    this.props.login(demoUser)
    this.props.closeModal()
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  redBorder() {
    if (this.props.errors.length !== 0) {
      return "red-border"
    } else {
      return "login-input"
    }
  }
  
  render() {
    let email = <div></div>
    if (this.props.formType === 'Create account') {
      email = (
        <input 
          className={this.redBorder()}
          type="email"
          value placeholder="Enter your e-mail"
          value={this.state.email}
          onChange={this.update("email")}
        />
      )
    }

    const errorList = this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>
        {error}
      </li>
    ))

    return( 
      <div className="modal-login">
        <div className="form-welcome">
          {this.props.formType}
        </div>

        <div className="demo-link">
          <Link to={"/"} onClick={() => this.handleDemo()}>
            Demo login
          </Link>
        </div>

        <div className="or"> or </div>

        <form className="session-form" onSubmit={this.handleSubmit}>
          
          <div className="error-list">  
            {errorList}
          </div>
          

          <div className="login-inputs">
            <input 
              className={this.redBorder()}
              type="text"
              value placeholder="Enter your username"
              value={this.state.username}
              onChange={this.update("username")}
            />
            <input
              className={this.redBorder()}
              type="password"
              value placeholder="Enter you password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          {email}
          </div>
          <button className="login-submit">Submit</button>
        </form>

      </div>
    )
      
  }
  
}

export default SessionForm