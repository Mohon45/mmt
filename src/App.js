import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Dashboard = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
