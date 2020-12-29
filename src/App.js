import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Countries from './Pages/Countries';
import './App.css';

function App(props) {
  return (
    <HashRouter>
      <React.Suspense >
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/countries-user" render={(props) => <Countries {...props} privilege={false}  />} exact={true}  />
          <Route path="/countries-admin" render={(props) => <Countries {...props} privilege={true}  />} exact={true} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
