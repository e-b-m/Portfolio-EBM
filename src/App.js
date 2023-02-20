import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Projects/>
      <Skills />
      <Contact/> 
    </main>
  );
}

export default App;
