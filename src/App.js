import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'; 
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <main className="main" >
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact" element={<Contact/>}/>      
      <Route path="/projects" element={<Projects/>}/>      
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    </main>
  );
}

export default App;


{/* <About/>
      <Projects/>
      <Skills />
      <Contact/>  */}