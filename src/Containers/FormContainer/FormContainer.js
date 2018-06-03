import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import sportsballLogo from '../../Assets/images/logo_creme.svg';
import loading from '../../Assets/images/loading.gif';
import './FormContainer.css';
import TeamSelect from '../TeamSelect/TeamSelect';

class FormContainer extends Component {
  constructor(props) {
    super();
  }
  
  render() {

    return ( 
      <div className="form-container">
        <img src={sportsballLogo} className="sportsball-logo"/>
        {
          !this.props.gameSummaries.length && !this.props.boxScores.length ? (
        <img className="loading" src={loading} alt="loading"/>
      ) : (
        < TeamSelect />
      )}
      </div>
     )
  }
}

const mapStateToProps = (state) => ({
  gameSummaries: state.gameSummaries,
  boxScores: state.boxScores
})

FormContainer.propTypes = {

}

export default connect(mapStateToProps, null)(FormContainer)




