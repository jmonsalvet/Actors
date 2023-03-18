import React from "react";
import "./Card.css"

const Card = ({ name, image, popularity }) => {
  return (
    <div className="tc dib br3 pa2 ma2 grow bw2 shadow-5">
      <img className="imageActor" alt="actor img" src={`https://image.tmdb.org/t/p/w500${image}`}/>

      <div>
        <h2>{name}</h2>
        <p>Popularity: {popularity}</p>
      </div>
    </div>
  );
};

export default Card;
