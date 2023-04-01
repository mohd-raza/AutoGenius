import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Type from "./components/Type";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/signup" element={<Home />} />
          <Route path="/prediction" element={<Home />} />
          <Route path="/analytics" element={<Home />} />
          <Route path="/comparing" element={<Home />} />
          <Route path="/feed" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
