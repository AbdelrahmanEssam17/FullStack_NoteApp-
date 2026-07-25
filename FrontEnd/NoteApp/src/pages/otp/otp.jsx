import React from "react";
import "./otp.css";

export default function Otp() {
  const handlechange = (e, index) => {
    const choosen = document.querySelectorAll(".square");
    if (e.target.value && index <= inputs.length - 1) {
      choosen[index + 1].focus();
    }
  };

  return (
    <div className="bigdiv">
      <div className="otp-container">
        <h2>Verify OTP</h2>
        <p>We sent a 6-digit code to your email.</p>

        <div className="otp-inputs">
          <input
            type="text"
            maxLength={1}
            className="square"
            onChange={(e) => handlechange(e, 0)}
          />
          <input
            type="text"
            maxLength={1}
            className="square"
            onChange={(e) => handlechange(e, 1)}
          />
          <input
            type="text"
            maxLength={1}
            className="square"
            onChange={(e) => handlechange(e, 2)}
          />
          <input
            type="text"
            maxLength={1}
            className="square"
            onChange={(e) => handlechange(e, 3)}
          />
          <input
            type="text"
            maxLength={1}
            className="square"
            onChange={(e) => handlechange(e, 4)}
          />
          <input
            type="text"
            maxLength={1}
            className="square"
            onChange={(e) => handlechange(e, 5)}
          />
        </div>

        <button className="button">Continue</button>
      </div>
    </div>
  );
}
