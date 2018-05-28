import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Login/Login'
import FormContainer from '../FormContainer/FormContainer';
import Main from '../Main/Main';

export class App extends Component {
  
  reder() { 
    return (
      < Router >
        < FormContainer />
      </Router>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  handleSummaries: (summaries) => 
  dispatch(addSummariesToStore(summaries))
});
export default App;
