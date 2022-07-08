import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import accueil_picture from '../components/assets/img/accueil_picture.jpg';
import technician from '../components/assets/img/technician-holding-solar-cell-eco-icon-solar-cell-system-min.jpg';
import future from '../components/assets/img/future-building.jpg';
import Image from 'next/image';
const Slides = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div className='slide_1 slideAll'>
            <div className='image'>
              <Image src={accueil_picture} alt='accueil_picture' />
            </div>
            <div className='slider-text'>
              {' '}
              <h1>
                Bureau d'étude <br /> pludisciplinaire
              </h1>
              <h3>
                AGEXIS est une société d'ingénierie <br /> et de gestion des
                projets <br />
                de la construction
              </h3>
              <button className='second-btn'>Devis en ligne</button>{' '}
            </div>{' '}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slide_1 slideAll'>
            <Image src={technician} alt='technician' />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='slide_1 slideAll'>
            <Image src={future} alt='future' />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slides;
