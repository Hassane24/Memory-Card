import React, { useState, useEffect } from "react";
import Score from "./Score/Score";
import Card from "./Card";

const Main = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setcurrentScore] = useState(0);
  const [chars, setChars] = useState([
    { name: "Killua", id: 0, clicked: false },
    { name: "Gon", id: 1, clicked: false },
    { name: "Kurapika", id: 2, clicked: false },
    { name: "Hisoka", id: 3, clicked: false },
    { name: "Hanzo", id: 4, clicked: false },
    { name: "Ging", id: 5, clicked: false },
    { name: "Leorio", id: 6, clicked: false },
    { name: "Netero", id: 7, clicked: false },
    { name: "Chrollo", id: 8, clicked: false },
    { name: "Illumi", id: 9, clicked: false },
    { name: "Uvo", id: 10, clicked: false },
    { name: "Shalnark", id: 11, clicked: false },
  ]);

  useEffect(() => {
    setChars((prevState) => {
      const newState = [...prevState];
      for (var i = newState.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newState[i];
        newState[i] = newState[j];
        newState[j] = temp;
      }
      return newState;
    });
  }, [currentScore]);

  const cardClickHandler = () => {
    setcurrentScore(currentScore + 1);
    setChars((prevState) => {
      const newState = [...prevState];
      for (var i = newState.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newState[i];
        newState[i] = newState[j];
        newState[j] = temp;
      }
      return newState;
    });
  };

  return (
    <div className="main">
      <Score bestScore={bestScore} currentScore={currentScore}></Score>
      <div className="cards-container">
        {chars.map((char) => (
          <Card
            imgSrc={require(`../assets/${char.name}.jpeg`)}
            imgAlt={char.name}
            key={char.id}
            character={char.name}
            clickEvent={cardClickHandler}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Main;
