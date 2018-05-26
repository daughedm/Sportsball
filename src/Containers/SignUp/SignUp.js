import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class SignUp extends Component {
  constructor(props) {
    
    this.state = {
      userName: '',
      password: ''
    }
  }

  render() {
    return ( 
      <div >

      </div>
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
