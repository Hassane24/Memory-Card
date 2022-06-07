import React, { useState, useEffect } from "react";
import Score from "./Score/Score";
import Card from "./Card";
import "../styles/Main.css";

const Main = () => {
  const initialState = [
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
  ];
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setcurrentScore] = useState(0);
  const [chars, setChars] = useState(initialState);

  useEffect(() => {
    setChars((prevState) => shuffleArrayItems(prevState));
  }, [currentScore]);

  const cardClickHandler = (e) => {
    if (e.target.innerText === "") {
      const charName = e.target.alt;
      if (chars.find((char) => char.name === charName).clicked) {
        setChars(initialState);
        setcurrentScore(0);
        return;
      }
    } else {
      const charName = e.target.innerText;
      if (chars.find((char) => char.name === charName).clicked) {
        setChars(initialState);
        setcurrentScore(0);
        return;
      }
    }

    if (e.target.innerText === "") {
      const charName = e.target.alt;
      setChars((prevState) => {
        const newState = [...prevState];
        newState.find((char) => char.name === charName).clicked = true;
        return newState;
      });
    } else {
      const charName = e.target.innerText;
      setChars((prevState) => {
        const newState = [...prevState];
        newState.find((char) => char.name === charName).clicked = true;
        return newState;
      });
    }

    setcurrentScore(currentScore + 1);
    if (currentScore >= bestScore) setBestScore(currentScore + 1);
  };

  const shuffleArrayItems = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
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
