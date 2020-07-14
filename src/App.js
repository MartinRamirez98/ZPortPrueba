import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './Components/Appbar/Appbar';
import Home from './Components/Home/Home';
import Workshop from './Components/Workshop/Workshop';
import Bundles from './Components/Bundles/Bundles';


function App(props) {
  return (
    <div className="App">
     <Router>
      <Appbar />
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/workshopInfo" component={Workshop}/>
        <Route exact path ="/bundles" component={Bundles}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
