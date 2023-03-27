import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Style.css';
import LogoComponent from './Components/LogoComponent';
import HomeComponent from './Components/HomeComponent';
import BodyComponent from './Components/BodyComponent';
import AboutComponent from './Components/AboutComponent';
import HistoryComponent from './Components/HistoryComponent';
import FooterComponent from './Components/FooterComponent';
import NavComponent from './Components/NavComponent';
import LogInComponent from './Components/LogInComponent';

function App() {
  return (
    <div className='center' >
      <LogoComponent></LogoComponent>
      <NavComponent></NavComponent>
      
      <BrowserRouter>
      <Routes>
        <Route path="Home" element={<HomeComponent />}> </Route>         
        <Route path="About" element={<AboutComponent />} ></Route>
        <Route path="History" element={<HistoryComponent />}> </Route>
        <Route path="Body" element={<BodyComponent />} ></Route>      
        <Route path="login" element={<LogInComponent />} ></Route> 
             

      </Routes>
    </BrowserRouter>
    <FooterComponent></FooterComponent>
    </div>
    
  );
}

export default App;
