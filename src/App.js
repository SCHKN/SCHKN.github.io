import React, { Component } from 'react';
import AppNavbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Container from './components/Container.js'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './styles/animate.css'
import './styles/ionicons.css'
import './styles/devicon.css'



class App extends Component {
  render() {
    return (
      <div className="App">
          <AppNavbar />
          <Container />
          <Footer />
      </div>
    );
  }
}

export default App;
