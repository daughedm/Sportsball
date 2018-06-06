import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import sportsballLogo from '../../Assets/images/logo_creme_home-02.svg';
import loading from '../../Assets/images/loading.gif';
import './FormContainer.css';
import TeamSelect from '../TeamSelect/TeamSelect';

export class FormContainer extends Component {
  
  render() {

    return ( 
      <div className="form-container">
        <img src={ sportsballLogo } className="sportsball-logo animated zoomIn" alt="Sportsball logo"/>
        {
          !this.props.gameSummaries.length && !this.props.boxScores.length ? (
            <img className="loading" src={ loading } alt="loading"/>
          ) : (
            < TeamSelect />
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gameSummaries: state.gameSummaries,
  boxScores: state.boxScores
});

FormContainer.propTypes = {
  gameSummaries: PropTypes.object,
  boxScores: PropTypes.object

};

export default connect(mapStateToProps, null)(FormContainer);




