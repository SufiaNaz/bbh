import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import WishData from "./data/wish";
import "./wishes.css";

function Wishes() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 }); // <-- for confetti
  

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const next = () => {
    if (index < WishData.length - 1) setIndex(prev => prev + 1);
  };
  
  const back = () => {
    if (index === 0) {
      navigate("/"); // Go to home page
    } else {
      setIndex(prev => prev - 1);
    }
  };
  
  const wish = WishData[index];


  return (
    <div className="wish-container">
      
      

      {/* Confetti */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={true}          // keeps falling continuously
        numberOfPieces={100}    // adjust for more/less confetti
      />

      {/* Wish card */}
      <div className="wish-card" key={index}>
        <img src={wish.image} alt={wish.from} />

        <div className="wish-text">
          <h2>From: {wish.from}</h2>
          <p>{wish.message}</p>

          <div className="nav">
            <button onClick={back}>⬅ Back</button>
            <button onClick={next} disabled={index === WishData.length - 1}>Next ➡</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Wishes;
