import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userName: '',
      password: ''
    }

  }
  

  render() {
    return (
      <form>
        <h3>Login</h3>
        <input type="text"/>
        <input type ="text"/>
        <input type ="submit"/>
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
