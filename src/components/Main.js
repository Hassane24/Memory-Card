import { useState, useEffect } from "react";
import Score from "./Score/Score";

const Main = () => {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setcurrentScore] = useState(0);

  return (
    <div className="main">
      <Score bestScore={bestScore} currentScore={currentScore}></Score>
    </div>
  );
};

export default Main;
