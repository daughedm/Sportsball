import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import sportsballLogo from '../../Assets/images/logo_creme.svg';
import './FormContainer.css';

export default class FormContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      onLogin: true,
      onSignUp: false,
    }
  }
  
  render() {
    return ( 
      <div className="form-container">
        <img src={sportsballLogo} className="sportsball-logo"/>
        <Login />
      </div>
     )
  }
}

FormContainer.propTypes = {

}




