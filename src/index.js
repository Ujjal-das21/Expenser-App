import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
  <App ></App>
  <Footer></Footer>
  </React.StrictMode>
);

