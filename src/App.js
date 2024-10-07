
import './App.css';
import Header from './components/Header';

import Cards from './components/Cards';

import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route } from 'react-router-dom';
import CradsDetail from './components/CradsDetail';
import Foter from './components/Foter';
// import "./components/style.css";


function App() {
  return (
    <>
  
    <Header/>
    
    
    <Routes>
      <Route path="/" element={<Cards/>} />
      <Route path="/cart/:id" element={<CradsDetail/>} />
    </Routes>
    

    <Foter/>
   
    
  
    </>
  );
}

export default App;
