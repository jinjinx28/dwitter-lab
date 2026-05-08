import './App.css';
import { useState, useEffect } from 'react';
// import { fetchData } from './util/fetch.js';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {
  const [like, setLike] = useState(0);
  const [data, setData] = useState({}); 
 
  
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}

