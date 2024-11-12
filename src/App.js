import './index.css';
import React from 'react';
import Header from './components/Header';
import About from './components/about';
import Projects from './components/projects';
import Formation from './components/formation';
import Contact from './components/contact';
import './App.css';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Formation />
      <Contact />
    </div>
  );
}

export default App;
