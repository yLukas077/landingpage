import React from 'react';
import './tailwind.css';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="w-full h-screen bg-white overflow-x-hidden">
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
