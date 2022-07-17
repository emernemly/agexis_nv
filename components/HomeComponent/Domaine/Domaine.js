import React, { useEffect, useState } from 'react';
import CardDomaine from './CardDomaine';
import Carousel from 'react-elastic-carousel';
import batiment_habitation from '../../../public/img/Batiment-habitation.jpg';
import batiment_fonctionelle from '../../../public/img/Batiments-fonctionnel.jpg';
import batiment_industruelle from '../../../public/img/industriel.jpg';
import VRD from '../../../public/img/VRD.jpg';

function Domaine() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ];
  const domaines = [
    {
      image: batiment_habitation,
      title: "Batiments d'habitation",
      description: [
        "Conception, construction ou réhabilitation de bâtiments d’habitation, maisons individuelles neuves, logements collectifs et sociaux."
      ],
    },
    {
      image: batiment_fonctionelle,
      title: 'Batiments fonctionelle',
      description: [
        "Construction et réhabilitation d’ouvrages fonctionnels : scolaires, culturels, sportifs et  établissements hospitaliers et hôteliers."
      ],
    },
    {
      image: batiment_industruelle,
      title: 'Batiments industruelle',
      description: [
        "Construction simple ou complexe d’unités de production, de commerces et de bâtiments industriels alliant technicité et performance."
      ],
    },
    {
      image: VRD,
      title: 'Infrastructures, ouvrages d’art, et VRD',
      description: [
        "Projets à grande envergure de construction et de restructuration des infrastructures, ouvrages d’Art, voiries et réseaux divers."
      ],
    },
  ];
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // only execute all the code below in client side

      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }
  const size = useWindowSize();

  return (
    <section className=''>
      <div className='all_carousel container' data-aos='fade-up'>
        <h2 className='heading-2'>Domaines D'interventions</h2>
        <br />
        <Carousel
          showArrows={true}
          pagination={false}
          itemsToShow={3}
          breakPoints={breakPoints}
          itemPadding={[10, 10]}
        >
          {domaines.map((domaine, index) => (
            <CardDomaine key={index} domaine={domaine} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Domaine;
