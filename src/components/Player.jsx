import React from 'react';
import { useState } from 'react';
const Player = ({ initialName, symbol,isActive }) => {
  const [palyerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditclick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }


  let editiablePlayerName = <span className="player-name">{palyerName}</span>;


  if (isEditing) {
    editiablePlayerName = (
      <input type="text" required value={palyerName} onChange={handleChange} />
    );
  }

  
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editiablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditclick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
