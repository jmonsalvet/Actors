import React from "react";
import Card from "./Card";

const CardList = ({ actors }) => {
  return (
    <div>
      {actors.map((user, i) => {
        return (
          <Card
            key={actors[i].id}
            name={actors[i].name}
            image={actors[i].profile_path}
            popularity={actors[i].popularity}
          />
        );
      })}
    </div>
  );
};

export default CardList;
