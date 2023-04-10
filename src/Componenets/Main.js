import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function Main() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzie, setTenzie] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((item) => item.isHeld);
    const firstvalue = dice[0].value;
    const allValue = dice.every((item) => item.value === firstvalue);
    if (allHeld && allValue) setTenzie(true);
  }, [dice]);

  function generate() {
    return {
      value: Math.floor(1 + Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; ++i) {
      newDice.push(generate());
    }

    return newDice;
  }

  function rollDice() {
    if (!tenzie) {
      setDice((oldDice) =>
        oldDice.map((dice) => {
          return dice.isHeld ? dice : generate();
        })
      );
    }
    else{
      setTenzie(false);
      setDice(allNewDice());
    }
  }

  function diceClick(id) {
    setDice((oldDice) =>
      oldDice.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const diceElement = dice.map((item) => (
    <Dice 
      className='dice'
      value={item.value}
      key={item.id}
      id={item.id}
      isHeld={item.isHeld}
      diceClick={diceClick}
    />
  ));
  return (
    <>
      {tenzie && <Confetti />}
      <div className="main-ele">
        <div className="main-sub-ele">{diceElement}</div>
        <button className="sub-ele-btn" onClick={rollDice}>
          {tenzie ? "New Game" : "Roll"}
        </button>
      </div>
    </>
  );
}

export default Main;
