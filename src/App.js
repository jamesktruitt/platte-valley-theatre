import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <header className="logo-header">
            Logo Header
          </header>
 
          <nav className="navigation-bar">
            Menu Navigation
          </nav>

          <main className="main-hero">
            Now Playing Hero
          </main>
          
          <main className="main-carousel">
            Upcoming Shows
          </main>

          <aside className="sidebar-left">
            About
          </aside>
          
          <aside className="sidebar-right">
            Sponsors
          </aside>

          <footer>
            Footer
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
