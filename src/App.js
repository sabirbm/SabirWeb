import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/ABout/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUps from './components/Scrollup/ScrollUps';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Home />
        <About />
        {/* <Voids /> */}
        <Project />
        <Skills />
        <Services />
        <Qualification />        
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUps />
    </div>
  );
}

export default App;
