import React, { useState } from 'react';
import Card from './Card';
import './CardStyle.css'
import logo from './Logo.jpeg'
import Bandera from './png-transparent-flag-of-colombia-flag-of-the-united-states-national-flag-flag-of-colombia-angle-flag-text-thumbnail.png'

const CardList = () => {
  const [cards, setCards] = useState([
    { title: 'Card 1', content: 'Contenido de la Card 1' },
    { title: 'Card 2', content: 'Contenido de la Card 2' },
    { title: 'Card 3', content: 'Contenido de la Card 3' },
  ]);
  const [counter, setCounter] = useState(0);
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardContent, setNewCardContent] = useState('');

  const handleCardClick = () => {
    setCounter(counter + 1);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCard = { title: newCardTitle, content: newCardContent };
    setCards([...cards, newCard]);
    setNewCardTitle('');
    setNewCardContent('');
  };

  return (
    <div className="container">
    <header className="header">
    <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Documentos</li>
          <li>Plantilla</li>
          <li>Reportes</li>
        </ul>
      </nav>
      <div className="text-right">
      <span>Napoleon</span>
          <img src={Bandera} alt="Bandera de Colombia" className="flag" />
          
        </div>
    </header>
    <div className="content-container">
    


    <div className="content">
   
      <h1>Contador: {counter}</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Título:
          <input
            type="text"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
        </label>
        <label>
          Contenido:
          <input
            type="text"
            value={newCardContent}
            onChange={(e) => setNewCardContent(e.target.value)}
          />
        </label>
        <button type="submit">Agregar Card</button>
      </form>
      <div className="card-list">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            onClick={handleCardClick}
          />
        ))}
      </div>
      
    </div>
    
    </div>
    </div>

  );
};

export default CardList;
