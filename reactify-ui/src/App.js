import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import store from './store';
import './sass/main.scss';
import './App.css';
import Default from './components/Default';
import Navbar from './components/Navbar';


import Home from './components/Home';
import FinishedProjects from './components/FinishedProjects';
import FinishedProject from './components/FinishedProject';
import OngoingProjects from './components/OngoingProjects';
import OngoingProject from './components/OngoingProject';

import Newsletters from './components/Newsletters';
import Newsletter from './components/Newsletter';




class App extends Component{
  render(){
    return(
        <Provider store={store}>
            <Fragment>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/finishedprojects' component={FinishedProjects} /> 
                <Route exact path='/finishedprojects/:id'  component={FinishedProject} />
                <Route exact path='/ongoingprojects' component={OngoingProjects} /> 
                <Route exact path='/ongoingprojects/:id'  component={OngoingProject} />
                <Route exact path='/newsletters' component={Newsletters} /> 
                <Route exact path='/newsletters/:id'  component={Newsletter} />  
                <Route component={Default} />
              </Switch>
            </Fragment>
        </Provider>

      )
  }
}



export default App;


