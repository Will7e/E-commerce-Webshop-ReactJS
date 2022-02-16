import "./App.css";
import Intro from "./components/Intro.js";
import Button from "./components/Button.js";
import SizeButton from "./components/SizeButton.js";

function App() {
  return (
    <div className="App">
      <div>
        <Intro />
        <Button>Köp</Button>
        <SizeButton>S</SizeButton>
      </div>
    </div>
  );
}

export default App;
