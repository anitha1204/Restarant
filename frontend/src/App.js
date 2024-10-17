import React from "react";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Thankyoupage from "./components/Thankyoupage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/book-now" element={<Home />} />
          <Route path="/thankyou" element={<Thankyoupage/>} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;