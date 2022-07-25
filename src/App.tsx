import "./App.css";
// import Main from "./components/Main";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/main"  element={<Main/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
