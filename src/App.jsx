import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Wishes from "./Wishes";
import music from "./assets/music/happy-birthday-song.mp3";
import "./App.css";

function App() {
  const [muted, setMuted] = useState(false);

  return (
    <>
      {/* Background music for ALL pages */}
      <audio src={music} autoPlay loop muted={muted} />

      {/* Mute / Unmute button */}
      <button className="mute-btn" onClick={() => setMuted(!muted)}>
        {muted ? "🔊" : "🔇"}
      </button>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </>
  );
}

export default App;
