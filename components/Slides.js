import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Slides = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div className='slide_1 slideAll'>
            {' '}
            <div className='slider-text'>
              <h1>
                Bureau d'étude <br /> pludisciplinaire
              </h1>
              <h3>
                AGEXIS est une société d'ingénierie <br /> et de gestion des
                projets <br />
                de la construction
              </h3>

              <button className='second-btn'>Devis en ligne</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slide_2 slideAll'></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slide_3 slideAll'></div>
        </Carousel.Item>
      </Carousel>
      <div className='click-path'></div>
    </div>
  );
};

export default Slides;
