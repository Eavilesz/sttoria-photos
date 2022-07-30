import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Summary from "./components/Summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ImageContext } from "./context";

import { useState } from "react";
function App() {
  const [imageList, setImageList] = useState<
    { src: string; isLiked: boolean; comment: string }[]
  >([]);
  return (
    <div className="App">
      <ImageContext.Provider value={imageList}>
        <Router>
          <Routes>
            <Route path="/" element={<Login setImageList={setImageList} />} />
            <Route
              path="/main/:client"
              element={
                <Main imageList={imageList} setImageList={setImageList} />
              }
            />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
