import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <main className="main" >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;800&display=swap" rel="stylesheet"/>

      <Navbar/>
      <About/>
      <Projects/>
      <Skills />
      <Contact/> 
    </main>
  );
}

export default App;
