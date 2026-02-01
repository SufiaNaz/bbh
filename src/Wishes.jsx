import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WishData from "./data/wish";
import "./wishes.css";

function Wishes() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

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
      <div className="wish-card" key={index}>
        <img src={wish.image} alt={wish.from} />

        <div className="wish-text">
          <h2>From: {wish.from}</h2>
          <p>{wish.message}</p>

          <div className="nav">
            <button onClick={back} >
              ⬅ Back
            </button>

            <button onClick={next} disabled={index === WishData.length - 1}>
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishes;
