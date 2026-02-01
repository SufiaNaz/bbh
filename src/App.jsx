import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Wishes from "./Wishes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishes" element={<Wishes />} />
    </Routes>
  );
}

export default App;
