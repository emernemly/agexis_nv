import React, { useEffect, useState } from 'react';
import CardDomaine from './CardDomaine';
import Carousel from 'react-elastic-carousel';
import batiment_habitation from '../assets/img/batiment_habitation.png';
import batiment_fonctionelle from '../assets/img/batiment_fonctionelle.png';
import batiment_industruelle from '../assets/img/batiment_industruelle.png';
import CadreUp from '../assets/logo/cadre_up';
function Domaine() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ];
  const domaines = [
    {
      image: batiment_habitation,
      title: "Batiments d'habitation",
      description: [
        'Maisons individuelles',
        'Appartements Bâtiments',
        'D’habitation collectifs',
        'Logements sociaux',
      ],
    },
    {
      image: batiment_fonctionelle,
      title: 'Batiments fonctionelle',
      description: [
        'Immeubles Grande Hauteur (IGH) et immeubles de Très',
        'Grande Hauteur (ITGHI)',
        'Bâtiments administratifs',
        'Bâtiments d’enseignement...',
      ],
    },
    {
      image: batiment_industruelle,
      title: 'Batiments industruelle',
      description: [
        ' Unités de stockage',
        `Bâtiments industriels / Locaux techniques usines, stations${(
          <br />
        )}d’épuration, entrepôts et hangars`,
        'Centres d’exploitation routière',
        ` Centres de secours, déchetterie…${(
          <br />
        )} Bureaux Restauration / Hôtellerie / Centres de vacances`,
      ],
    },
    {
      image: batiment_industruelle,
      title: 'Infrastructures, ouvrages d’art, et VRD',
      description: [
        'Unités de stockage',
        '  Bâtiments industriels / Locaux techniques usines, stations d’épuration, entrepôts et hangars',
        'Centres d’exploitation routière',
        ' Centres de secours, déchetterie… Bureaux Restauration / Hôtellerie / Centres de vacances',
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
  console.log(size);
  return (
    <div className='_container'>
      <div className='all_carousel container' data-aos='fade-up'>
        <div className='title tsize'>
          <h2>
            Domaines D'interventions
            <div className='svg'>
              {' '}
              <CadreUp />
            </div>
          </h2>
        </div>
        <Carousel
          showArrows={true}
          pagination={false}
          itemsToShow={3}
          breakPoints={breakPoints}
        >
          {domaines.map((domaine, index) => (
            <CardDomaine key={index} domaine={domaine} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Domaine;