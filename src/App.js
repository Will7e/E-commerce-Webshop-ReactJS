import "./App.css";
import Intro from "./components/Intro.js";
import Button from "./components/Button.js";

function App() {
  return (
    <div className="App">
      <div>
        <Intro />
        <Button>Köp</Button>
      </div>
    </div>
  );
}

export default App;
