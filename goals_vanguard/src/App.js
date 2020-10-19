import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Student from './components/Student'
import VerticalTabs from './components/SideNav'
import './App.css'


export class App extends Component {
  render() {
    return (
      <div>
        <VerticalTabs></VerticalTabs>
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-md bg-info navbar-dark">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/student"><img className='img-fluid img' src="./assets/logo5.png" alt="vanguard"></img>&nbsp;Vanguard&nbsp;&nbsp;&nbsp;| Participant</Link>
              </div>
            </nav>

            <Switch>
              <Route exact path="/student" component={Student}></Route>
              <Route exact path="*" render={() => <Redirect to="/student" />}></Route>
            </Switch>
          </div>
        </Router>

        
      </div>
    )
  }
}

export default App
