import "./App.css";
import Header from "./components/Header.js";
import { propTypes } from "react-bootstrap/esm/Image";
import Homepage from "./components/Homepage.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Homepage></Homepage>
    </div>
  );
}

export default App;
