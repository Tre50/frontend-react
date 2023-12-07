
import React,{ createContext, } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
//import SignupForm from './components/SignupForm';
import Footer from './components/Footer'
import CardContainer from './components/CardContainer';
import RecipeList from './components/RecipeList';
import Signup from './pages/Signup'







export const UserContext = createContext()


function App() {

  
    

  return (
    <>  
    <div>
      <h1 >The Mayne Course Recipe Builder </h1>
      {/* Render the SignupForm component */}
  
    </div>

        <BrowserRouter>
     
        <Header/>
        
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        {/* <Route path='/SignupForm' element={<SignupForm />}/> */}
        <Route path='/CardContainer' element={<CardContainer/>} />
        <Route path='/' element={<Home />}/>
        <Route path='/RecipeList' element={<RecipeList />}/>
      
      </Routes>
      
    </BrowserRouter>
    <Footer/>

    </>


  );
}

export default App
