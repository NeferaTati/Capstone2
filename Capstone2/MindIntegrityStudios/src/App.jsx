import ContactUs from "./Pages/ContactComponents/ContactUs";
import Home from "./Pages/HomeComponents/Home";
import AboutUs from "./Pages/AboutComponents/AboutUs";
import Work from "./Pages/WorkComponents/Work";
import { Routes, Route } from 'react-router-dom';
// import AppRoutes from "./Routes";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/work" element={<Work />} />
    </Routes>
    // <div className="App">
    //   <AppRoutes />
    // </div>
  );
}

export default App;
