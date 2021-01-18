import React from 'react';
import ThemeWrapper, { AppContext } from './theme/ThemeWrapper';
import LandingPage from './containers/landing/LandingPage'
import CompanyProfile from './containers/Profile/CompanyProfile';
import Posts from './containers/newsletter/Posts'




import {Switch, Route} from 'react-router-dom';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <ThemeWrapper>
      <AppContext.Consumer>
          {(changeMode) => (
          <Switch>
            
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/about-us' component={CompanyProfile} />
            <Route exact path='/blog' component={Posts} />
          </Switch>
        )}
      </AppContext.Consumer>
    </ThemeWrapper>
  );
}







export default App;
