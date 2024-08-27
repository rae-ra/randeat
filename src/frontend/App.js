import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CreateRecipe from './pages/CreateRecipe';
import Recipes from './pages/Recipes';
import About from './pages/About';
import './App.css';
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/auth/PrivateRoute";
import Logout from "./components/auth/Logout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <header className="App-header">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-recipe" element={<PrivateRoute chefOnly={true}><CreateRecipe /></PrivateRoute>} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login showMessage={false}/>} />
                <Route path="/pleaselogin" element={<Login showMessage={false}/>} />
                <Route path="/dashboard" element={<PrivateRoute chefOnly={false}><Dashboard /></PrivateRoute>} />
                <Route path="/logout" element={<PrivateRoute chefOnly={false}><Logout /></PrivateRoute>} />
            </Routes>
          </header>
        </div>
      </Router>
  );
}

export default App;
