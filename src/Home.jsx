import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  const birthdayDate = new Date("2026-02-02T00:00:00");
  const [timeLeft, setTimeLeft] = useState({});
  const [showWish, setShowWish] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = birthdayDate - now;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const surprise = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
    setShowWish(true);
  };

  return (
    <div className="container">
      <h1 className="title">🎂 Happy Birthday Gulnaz 🎂</h1>

      <p className="subtitle">✨ 2nd February ✨</p>

      <div className="countdown">
        <div>{timeLeft.days} <span>Days</span></div>
        <div>{timeLeft.hours} <span>Hours</span></div>
        <div>{timeLeft.minutes} <span>Minutes</span></div>
        <div>{timeLeft.seconds} <span>Seconds</span></div>
      </div>

      <button className="btn" onClick={surprise}>
        🎁 Tap for Surprise
      </button>

      {showWish && (
        <p className="wish">
          Gulnaz, you are pure sunshine 💖  
          May your life be as beautiful as your smile,  
          as soft as your heart,  
          and as sweet as your birthday cake 🎂✨
        </p>
      )}
      <Link to="/wishes">
  <button className="btn">💌 See Birthday Wishes</button>
</Link>
 
    </div>
  );
}

export default Home;
