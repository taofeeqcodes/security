import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ChapterOne from "./pages/ChapterOne";
import Name from "./pages/Name";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addname" element={<Name />} />
          <Route path="/chapterone" element={<ChapterOne />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
