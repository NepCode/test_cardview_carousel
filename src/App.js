import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Navbar from'./components/layout/Navbar'
import Home from'./components/pages/Home'


function App() {

  return (
    <Router>
      <Navbar/>  
      <Container>
      <Route exact path='/' component={Home} />
      </Container>
    </Router>
  );
}
export default App;
