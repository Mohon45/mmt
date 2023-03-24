import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

const Dashboard = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
