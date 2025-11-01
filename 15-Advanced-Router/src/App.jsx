import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Product from "./Pages/Product.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Notfound from "./Pages/Notfound.jsx";
import Men from "./Pages/Men.jsx";
import Women from "./Pages/Women.jsx";
import Courses from "./Pages/Courses.jsx";
import CoursesDetail from "./Pages/CoursesDetail.jsx";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:coursesId" element={<CoursesDetail/>} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women/>} />
        </Route>
        

        <Route path="/*" element={<Notfound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
