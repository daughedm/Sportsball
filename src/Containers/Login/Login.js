import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    
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
      < form 
        className="login-form"
        type="submit"
        onSubmit = "####" 
      >
        <h3 
          className="form-header">Login
        </h3>
        <input 
          className = "input-field"
          type="text" 
          onChange={this.handleChange} 
          name="userName" 
          value={this.state.userName} 
          placeholder="username"/>
        <input 
          className = "input-field"        
          type ="password" 
          onChange={this.handleChange} 
          name="password" 
          value={this.state.password} 
          placeholder="password"/>
        <button 
          className="submit-button"
          type ="submit" 
        >login
        </button>
        <a className="anchor-toggle">Not a user? Sign Up.</a>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

Login.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
