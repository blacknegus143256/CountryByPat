import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(res => setCountries(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path="/country/:code" element={<CountryPage countries={countries} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
