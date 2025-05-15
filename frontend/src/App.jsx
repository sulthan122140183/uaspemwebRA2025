import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import './style.css'; 

function App() {
  return (
    <Router>

      <div className="bg-gray-100"> 
        <Header /> 

        <main className="container mx-auto py-8 pt-20 md:pt-24">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
