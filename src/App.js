import "./App.css";
import Intro from "./components/Intro.js";
import Button from "./components/Button.js";
import SizeButton from "./components/SizeButton.js";
import Header from "./components/Header.js";
import Shipping from "./components/Shipping.js";


function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
        <Intro />
        <Button>Köp</Button>
        <Shipping></Shipping>
        <SizeButton>S</SizeButton>
      </div>
    </div>
  );
}

export default App;
