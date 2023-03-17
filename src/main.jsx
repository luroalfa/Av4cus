import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import Services from "./pages/Services/Services";
import NotFount from "./pages/NotFount/NotFount";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
