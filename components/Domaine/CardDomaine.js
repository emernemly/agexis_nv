import React from 'react';
import { Card, Button, CardImg } from 'react-bootstrap';
import Image from 'next/image';
const CardDomaine = ({ domaine }) => {
  const Description = (element) => {
    console.log(element);
  };
  return (
    <div>
      <Card className='domaine'>
        <Image src={domaine.image} alt={domaine.image} />
        <Card.Body>
          <Card.Title>
            <h4>{domaine.title}</h4>
          </Card.Title>

          <ul className='card-text'>
            {domaine.description.map((el, index) => {
              return <li key={index}> {el} </li>;
            })}
          </ul>
          <button className='primary-btn' variant='primary'>
            Lire la suite {'>'}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDomaine;
