import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import sportsballLogo from '../../Assets/images/logo_creme.svg';
import './FormContainer.css';
import TeamSelect from '../TeamSelect/TeamSelect';

export default class FormContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      onLogin: false,
      onSignUp: false,
    }
  }
  
  render() {
    const onLogin = this.state.onLogin;
    const formPage = onLogin ? (
      <Login />
    ) : (
      <SignUp />
      );
    return ( 
      <div className="form-container">
        <img src={sportsballLogo} className="sportsball-logo"/>
        {formPage}
        <TeamSelect />
      </div>
     )
  }
}

FormContainer.propTypes = {

}




