import { createContext, } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header'
import LoginForm from './pages/Login';
import Footer from './components/Footer'
import Signup from './pages/Signup'
//import CardContainer from './components/CardContainer';

export const UserContext = createContext()

function App() {

    

  return (
    <>  
    hgghhg
          <Header/>
        <BrowserRouter>
      
      <Routes>
       
        <Route path='/Login' element={<LoginForm />} />
       
       
        <Route path='/Signup' element={<Signup />}/>
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
