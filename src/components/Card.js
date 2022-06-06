const Card = (props) => {
  return (
    <div className="card" onClick={props.clickEvent}>
      <img src={props.imgSrc} alt={props.imgAlt}></img>
      <div className="char-name">{props.character}</div>
    </div>
  );
};
export default Card;
