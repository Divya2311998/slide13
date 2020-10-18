import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Goals from './components/Goals'
import VerticalTabs from './components/SideNav'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import './App.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node
};

export class App extends Component {
  render() {
    return (
      <div>
        <VerticalTabs></VerticalTabs>
        {/* <TabPanel  >  */}
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
        {/* </TabPnel> */}
        
      </div>
    )
  }
}

export default App
