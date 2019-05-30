import React from "react";

const Card = ({ robot }) => {
  const { id, name, email, username } = robot;
  return (
    <div id={id} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div className="tc">
        <h2>{name}</h2>
        <h3>{username.toUpperCase()}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
