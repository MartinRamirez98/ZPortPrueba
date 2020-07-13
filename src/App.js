import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './Components/Appbar/Appbar';
import Home from './Components/Home/Home';


function App(props) {
  return (
    <div className="App">
     <Router>
      <Appbar />
      <Switch>
        <Route exact path ="/" component={Home}/>
        
      </Switch>
    </Router>
    </div>
  );
}

export default App;
