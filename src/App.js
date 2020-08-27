import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Connect } from 'react-redux';
import { connect } from 'net';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path='/login'
              render={props => {
                return (
                  <h1>Login</h1>
                )
              }}
            />

            <Route
              path='/'
              render={props => {
                return (
                  <h1>Root</h1>
                )
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.auth,
  ...state.chat
})

const mapDispatchToProps = dispatch => ({

})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
