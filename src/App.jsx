import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Authors } from "./components/authors";
import { Contact } from "./components/contact";
import Book0 from "./components/book0"; 
import Book1 from "./components/book1"; 
import Book2 from "./components/book2";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Routes>
          <Route path='/' element={<Gallery data={landingPageData.Gallery} />} />
          <Route path='/book0' element={<Book0 />} />
          <Route path='/book1' element={<Book1 />} />
          <Route path='/book2' element={<Book2 />} />
        </Routes>
        <Authors data={landingPageData.Authors} />
        <Contact data={landingPageData.Contact} />
      </div>
    </Router>
  );
};

export default App;
