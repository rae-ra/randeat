import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import Recipes from './pages/Recipes';
import About from './pages/About';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-recipe" element={<CreateRecipe />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </header>
        </div>
      </Router>
  );
}

export default App;
