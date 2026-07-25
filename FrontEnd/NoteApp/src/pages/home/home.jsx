import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="divs">
        <h1>Your Notes</h1>
        <button className="buttonn">Add Note</button>
      </div>

      <div className="notes-container"></div>
    </div>
  );
}
