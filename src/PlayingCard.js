import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useCardFlipState from "./hooks/hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  //Add custom hook useCardFlipState from ./hooks
  const [isFacingUp, toggleIsFacingUp] = useCardFlipState();

  /* !!! Custom Hook above negates need for code below */

  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
