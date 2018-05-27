import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class SignUp extends Component {
  constructor(props) {
    super();
    
    this.state = {
      userName: '',
      password: ''
    }
  }

  render() {
    return ( 
    <form>
      <h3>Login</h3> 
        <input type = "text" />
        <input type = "text" />
        <input type = "submit" />
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
