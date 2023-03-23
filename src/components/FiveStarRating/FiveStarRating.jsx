import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  //Declaration tableau d'etoiles (jsx) vide
  const starList = [];
  //stocker dans une variable le nombre d'etoile pleine
  const StarFillCount = Math.floor(rating);
  //Stocker dans une variable si oui ou non il y'a une demi etoile
  const hasStarHalf = rating - StarFillCount >= 0.5;
  //Stocker dans une variable le nombre d'etoile vide
  const emptyStarCount = 5 - StarFillCount - (hasStarHalf ? 1 : 0);
  //Pusher dans le tableau les etoiles pleines
  for (let i = 1; i <= StarFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  //Pusher dans le tableau les dei etoiles (s'il y'en a )
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  //Pusher dans le tableau les etoiles vides
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  return <div>{starList}</div>;
}
