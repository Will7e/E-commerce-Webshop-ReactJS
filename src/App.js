import "./App.css";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Products catId={1}></Products>
      <Products catId={2}></Products>
      <Products catId={3}></Products>
      <Footer />
    </div>
  );
}

export default App;
