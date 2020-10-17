import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Goals from './components/Goals'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-md bg-info navbar-dark">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/goals"><img className='img-fluid img' src="./assets/logo5.png" alt="vanguard"></img>&nbsp;Vanguard&nbsp;&nbsp;&nbsp;| Participant</Link>
              </div>
            </nav>

            <Switch>
              <Route exact path="/goals" component={Goals}></Route>
              <Route exact path="*" render={() => <Redirect to="/goals" />}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
