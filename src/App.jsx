import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Wishes from "./Wishes";
import music from "./assets/music/happy-birthday-song.mp3";
import "./App.css";

function App() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const startMusic = () => {
    audioRef.current.play();
    setStarted(true);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop muted={muted} />

      {!started && (
        <button className="start-music-btn" onClick={startMusic}>
          🎵 Start Music
        </button>
      )}

      {started && (
        <button className="mute-btn" onClick={() => setMuted(!muted)}>
          {muted ? "🔊" : "🔇"}
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
      </Routes>
    </>
  );
}

export default App;
