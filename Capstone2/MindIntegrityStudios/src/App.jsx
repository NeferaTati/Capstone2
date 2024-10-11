import ContactUs from './Pages/ContactComponents/ContactUs'
import Home from "./Pages/HomeComponents/Home";
import AboutUs from "./Pages/AboutComponents/AboutUs";
import Work from "./Pages/WorkComponents/Work";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navigation from './Pages/HomeComponents/Navigation';
import React from 'react';
import Additems from './Pages/WorkComponents/Additems';
import Test from './Pages/WorkComponents/Test';
import SingleView from './Pages/WorkComponents/singleView';

// import AppRoutes from "./Routes";

function App() {
  return (
<>

        <Navigation/>
       
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/work" element={<Work/>} />
      <Route path="/Additems" element={<Additems/>}/>
      <Route path="/item/:id" element={<SingleView />} />
      {/* <Route path='/photos' element{<Photos />} */}
    </Routes>
    
    </>
  );
}



export default App;