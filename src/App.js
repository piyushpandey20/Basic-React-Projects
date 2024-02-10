import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScroolIndicator from "./components/scroll-indicator";

function App() {
  return (
    <div className="App">
      {/* Accordion */}
      <Accordian />
      {/* RandomColor */}
      <RandomColor />
      {/* Star-Rating */}
      <StarRating />
      {/* ImageSlider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      />
      {/* LoadMoreProducts */}
      <LoadMoreData />
      {/* Tree-View */}
      <TreeView menus={menus} />
      {/* Qr Code Generator */}
      <QRCodeGenerator />
      {/* light-dark-mode */}
      <LightDarkMode />
      {/* scrool Indicator */}
      <ScroolIndicator url={"https://dummyjson.com/products?limit=100"} />
    </div>
  );
}

export default App;
