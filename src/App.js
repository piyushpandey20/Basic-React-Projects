import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";

function App() {
  return (
    <div className="App">
      {/* Accordion */}
      <Accordian />
      {/* RandomColor */}
      <RandomColor />
    </div>
  );
}

export default App;
