import React, { useRef } from "react";
import "./PartyPopper.css";
import confetti from "canvas-confetti";

const PartyPoppers = () => {
  const partyRef = useRef(null);

  const party = () => {
    const button = partyRef.current;
    if (button) {
      const { left, top } = button.getBoundingClientRect();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: {
          x: (left + button.offsetWidth / 2) / 1000 - 0.45,
          y: (top + button.offsetHeight / 2) / 1000,
        },
      });
    }
  };
  return (
    <>
      <h1 className="heading">Party Popper Effect</h1>
      <div className="container">
        <button className="party-btn" onClick={party} ref={partyRef}>
          Party🎉
        </button>
      </div>
    </>
  );
};

export default PartyPoppers;
