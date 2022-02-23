import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
