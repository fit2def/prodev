import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Landing from '../Landing';
import OtherPage from '../OtherPage';
import Nav from '../Nav';
import './App.css';

function LoggedIn() {
  return (
    <div className='App'>
      <Nav />
      <Switch className='pages'>
        <Route path='/' exact component={Landing} />
        <Route path='/other' component={OtherPage}/>} />
      </Switch>
    </div>
  )
}

class App extends Component {
  state = {
    authedUser: null
  };

  login({ authedUser, password }) {
    this.setState({
      ...this.state,
      authedUser
    });
  }

  render() {
    return (
      <BrowserRouter >
        {this.state.authedUser 
          ? <LoggedIn /> 
          : <Login login={(username) => this.login(username)}/>
        }
      </BrowserRouter >
    );
  }
}

export default App;
