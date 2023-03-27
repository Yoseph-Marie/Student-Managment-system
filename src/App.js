import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Style.css';
import HomeComponent from './Components/HomeComponent';
import BodyComponent from './Components/BodyComponent';
import AboutComponent from './Components/AboutComponent';
import HistoryComponent from './Components/HistoryComponent';
import NavComponent from './Components/NavComponent';
import LogInComponent from './Components/LogInComponent';

function App() {
  return (
    <div className='center' >
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
    </div>
    
  );
}

export default App;
