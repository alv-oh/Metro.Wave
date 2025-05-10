import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import React from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProduct';
import SingleProduct from './components/SingleProduct';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';
import Categories from './components/Categories';


function App() {
  return (
    <Router>
      <div className="App"> 
      
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/' element={<GetProducts/>} />
          <Route path='/addproduct' element={<AddProducts/>} />
          <Route path='/singleproduct' element={<SingleProduct/>}/>
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/reviews' element={<Reviews/>} />
        </Routes>
  
      </div>
      
    </Router>
  );
}

export default App;
