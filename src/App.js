import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Appbar from './Components/Appbar/Appbar';
import Home from './Components/Home/Home';
import Workshop from './Components/Workshop/Workshop';
import Bundles from './Components/Bundles/Bundles';


function App(props) {
  return (
    <div className="App">
     <HashRouter>
      <Appbar />
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/workshopInfo" component={Workshop}/>
        <Route exact path ="/bundles" component={Bundles}/>
      </Switch>
    </HashRouter>
    </div>
  );
}

export default App;
