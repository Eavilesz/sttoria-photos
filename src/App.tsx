import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Summary from "./components/Summary";
import { Layout } from "./components/Layout";
import { ImageContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState<
    { src: string; isLiked: boolean; comment: string }[]
  >([]);

  const MainComponent = Layout(Main);
  const SummaryComponent = Layout(Summary);

  return (
    <div className="App">
      <ImageContext.Provider value={imageList}>
        <Router>
          <Routes>
            <Route path="/" element={<Login setImageList={setImageList} />} />
            <Route
              path="/main/:client"
              element={<MainComponent setImageList={setImageList} />}
            />
            <Route path="/summary" element={<SummaryComponent />} />
          </Routes>
        </Router>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
