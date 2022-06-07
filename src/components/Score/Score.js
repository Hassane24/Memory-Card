import BestScore from "./BestScore";
import CurrentScore from "./CurrentScore";
import "../../styles/Score.css";
const Score = (props) => {
  return (
    <div className="score">
      <BestScore bestScore={props.bestScore}></BestScore>
      <CurrentScore currentScore={props.currentScore}></CurrentScore>
    </div>
  );
};

export default Score;
