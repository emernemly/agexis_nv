import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Slides = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item className='carousel-slider slider-1'>
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
        </Carousel.Item>
        <Carousel.Item className='carousel-slider slider-2'>
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
        </Carousel.Item>
        {/* <Carousel.Item className='carousel-slider slider-3'>
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
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Slides;
