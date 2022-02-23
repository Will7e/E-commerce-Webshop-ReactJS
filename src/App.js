import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
