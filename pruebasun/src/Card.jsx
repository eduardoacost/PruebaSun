import React, { useState } from 'react';

const Card = ({ title, content, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onClick();
  };

  return (
    <div className="card" onClick={handleClick}>
      <h2>{title}</h2>
      <p>{isFlipped ? 'Contenido 2' : content}</p>
    </div>
  );
};

export default Card;