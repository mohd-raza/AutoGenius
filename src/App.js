import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Prediction from "./pages/Prediction";
import Analytics from "./pages/Analytics";
import CarFinder from "./pages/CarFinder";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/comparing" element={<Home />} />
          <Route path="/car-finder" element={<CarFinder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
