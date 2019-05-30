import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("Noooooo!");
  // }
  return (
    <div>
      {robots.map(robot => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
