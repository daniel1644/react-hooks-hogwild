import React from "react";

const HogTile = ({ hog, setSelectedHog }) => {
  const handleClick = () => {
    setSelectedHog(hog);
  };

  return (
    <div className="hog-tile" onClick={handleClick}>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
    </div>
  );
};

export default HogTile;