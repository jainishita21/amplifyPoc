import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}


export default App;