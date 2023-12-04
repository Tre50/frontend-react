
import React,{ createContext, } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'

import Footer from './components/Footer'
import SignupForm from './components/SignupForm'



//import CardContainer from './components/CardContainer';

export const UserContext = createContext()


function App() {

  
    

  return (
    <>  
    <div >
      <h1 >The Mayne Course Recipe Builder </h1>
      {/* Render the SignupForm component */}
  
    </div >

      <SignupForm />
        <Header />
        <BrowserRouter>
        
      <Routes>
       
        {/* <Route path='/Login' element={<LoginForm />} /> */}
        <Route path='/SignupForm' element={<SignupForm />}/>
        <Route path='/Header' element={<Header />} />
        <Route path='/' element={<Home />}/>
        <>  
        </>
      </Routes>
      
    </BrowserRouter>
    <Footer/>

    </>


  );
}

export default App
