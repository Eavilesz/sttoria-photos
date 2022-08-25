import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { ImageContext } from "./context";
import LoadingPage from "./components/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import Album from "./components/Album";

function App() {
  const [imageList, setImageList] = useState<
    { src: string; isLiked: boolean; comment: string; isPrinted: boolean }[]
  >([]);

  const SummaryComponent = lazy(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
    return await import("./components/Summary");
  });

  return (
    <div className="App">
      <ImageContext.Provider value={imageList}>
        <Router>
          <Routes>
            <Route path="/" element={<Login setImageList={setImageList} />} />
            <Route
              path="/main/:client"
              element={<Main setImageList={setImageList} />}
            />
            <Route
              path="/album"
              element={<Album setImageList={setImageList} />}
            />
            <Route
              path="/summary"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <SummaryComponent />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
