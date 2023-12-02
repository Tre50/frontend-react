import React from 'react';
import { createContext, } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
//import LoginForm from './pages/Login';
import Footer from './components/Footer'
import SignupForm from './components/SignupForm'


//import CardContainer from './components/CardContainer';

export const UserContext = createContext()


function App() {

  
    

  return (
    <>  
    <div className='container text-center text-primary'>
      <h1 className="text-success">The Mayne Course Recipe Builder </h1>
      {/* Render the SignupForm component */}
      <SignupForm />
    </div>
  

        <Header />
        <BrowserRouter>
        
      <Routes>
       
        {/* <Route path='/Login' element={<LoginForm />} /> */}
        <Route path='/Header' element={<Header />} />
        <Route path='/SignupForm' element={<SignupForm />}/>
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
