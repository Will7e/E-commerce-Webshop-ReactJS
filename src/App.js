import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import ProductsList from "./components/ProductsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import About from ".components/About"
import CustomerService from ".components/CostumersService"
import HowTo from ".components/HowTo"
import Club from ".components/Club"


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/customer" element={<CustomerService />} />
            <Route exact path="/howto" element={<HowTo />} />
            <Route exact path="/club" element={<Club />} />
          <Route path="/" element={<Homepage />} />

          <Route
            path="/halsband"
            exact
            element={<ProductsList catName="Halsband" catId={2} />}
          />

          <Route
            path="/koppel"
            exact
            element={<ProductsList catName="Koppel" catId={1} />}
          />

          <Route
            path="/namnbrickor"
            exact
            element={<ProductsList catName="Namnbrickor" catId={3} />}
          />
          <Route path="/varukorg" exact element={<Checkout />} />
        </Routes>
      </div>

      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
