import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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
    </div>
  );
}

export default App;
