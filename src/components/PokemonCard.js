import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const [front, setFront] = useState(true);

  function handleClick() {
    setFront(!front);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={(front) ? poke.sprites.front : poke.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{ poke.name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
