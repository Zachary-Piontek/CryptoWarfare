import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './global.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthDisplay from './components/AuthDisplay.js';
import Header from './header.jsx';
import Footer from './footer.js';
import Home from './components/Home.js';


const container = document.getElementById('app') || document.createElement('div')
container.id = 'app'
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/auth" element={ <AuthDisplay /> } />
          <Route path="*" element={ <div>404</div> } />
      </Routes>
    <Footer />
    </Router>
  </React.StrictMode>
);
