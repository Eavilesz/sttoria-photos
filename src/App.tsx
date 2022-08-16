import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import { Layout } from "./components/Layout";
import { ImageContext } from "./context";
import LoadingPage from "./components/LoadingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

function App() {
  const [imageList, setImageList] = useState<
    { src: string; isLiked: boolean; comment: string }[]
  >([]);

  const MainComponent = Layout(Main);

  const LoadingPageComponent = Layout(LoadingPage);

  const SummaryComponent = Layout(
    lazy(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1 * 1000));
      return await import("./components/Summary");
    })
  );

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
            <Route
              path="/summary"
              element={
                <Suspense fallback={<LoadingPageComponent />}>
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
