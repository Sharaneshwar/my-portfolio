import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Loader from './components/loader/Loader.jsx';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    setInterval(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className="gradient-container background"></div>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default App;
