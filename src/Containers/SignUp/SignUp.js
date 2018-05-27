import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './SignUp.css';

export class SignUp extends Component {
  constructor(props) {
    super();
    
    this.state = {
      userName: '',
      password: ''
    }
  }

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    }

  render() {
    return ( 
      <form
        className = "login-form"
        type = "submit"
        onSubmit = "####" 
      >
        <h3
          className = "form-header" > Sign Up </h3> 
        <input
          className = "input-field"
          type = "text"
          onChange = {this.handleChange}
          name = "userName"
          value = {this.state.userName}
          placeholder = "username" 
        />
        <input
          className = "input-field"
          type = "password"
          onChange = {this.handleChange}
          name = "password"
          value = {this.state.password}
          placeholder = "password" 
        />
        <button
          className = "submit-button"
          type = "submit" >
         sign up 
        </button> 
        <a 
          className = "anchor-toggle" > Already a user? Login. 
        </a> 
      </form>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

SignUp.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
