import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar';
import ElAragan from './views/ElAragan';
import Hello from './views/Hello';

function App() {
  return (
       
    <Router>
      <Switch >
        <Navbar/>
        <Route path="/Hello" component={Hello}/> 
        <Route path="/ElAragan" component={ElAragan}/> 
      </Switch>
    </Router>
    
  );
}

export default App;
