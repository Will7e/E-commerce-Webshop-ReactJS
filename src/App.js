import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CustomerService from "./components/CustomerService";
import HowTo from "./components/HowTo";
import Club from "./components/Club";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/customer" element={<CustomerService />} />
            <Route exact path="/howto" element={<HowTo />} />
            <Route exact path="/club" element={<Club />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
