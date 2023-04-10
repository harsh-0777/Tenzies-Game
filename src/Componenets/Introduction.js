import React from "react";

export const Introduction = () => {
  return (
    <div className="intro">
      <h1 className="intro-h1">Welcome to Tenzies-Game</h1>
      <p className="intro-p">A fun loving number game</p>

      <div className="intro-rule">
        <h2 className="into-rule-h2">Instructions to Play:</h2>
        <ol className="intro-ol">
          <li className="intro-rule-li">
            Out of the given number you have to select all similiar numbers(all
            of them).
          </li>
          <li className="intro-rule-li">When you select all the similar number.</li>
          <li className="intro-rule-li">Click on the Roll button to generate more numbers.</li>
          <li className="intro-rule-li">The game will when all the numbers in the box are same.</li>
          <li className="intro-rule-li">You can start new Game by clicking on the new game button.</li>
        </ol>
      </div>
    </div>
  );
};
