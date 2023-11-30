import { createContext, } from 'react';
import './App.css';
import  {BrowserRouter, Routes, Route} from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Signup from './pages/Signup'
import CardContainer from './components/CardContainer';

export const UserContext = createContext()

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
         <Route path='/' element={<Header />} />
        <Route path='/' element={<Footer />} /> 
        <Route path='/' element={<Home />} />
        <Route path='/' element={<CardContainer />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
