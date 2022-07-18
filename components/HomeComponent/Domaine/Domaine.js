import React, { useEffect, useState } from 'react';
import CardDomaine from './CardDomaine';
import Carousel from 'react-elastic-carousel';
import batiment_habitation from '../../../public/img/batiment_habitation-min.webp';
import batiment_fonctionelle from '../../../public/img/batiment_fonctionelle-min.webp';
import batiment_industruelle from '../../../public/img/batiment_industruelle-min.webp';

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

  const [width, SetWidth] = useState('');

  const UpdateDimensions = () => {
    SetWidth(window.innerWidth);
  };
  useEffect(() => {
    SetWidth(window.innerWidth);
    window.addEventListener('resize', UpdateDimensions);
    return () => {
      window.removeEventListener('resize', UpdateDimensions);
    };
  }, []);
  return (
    <section>
      <div className='all_carousel container' data-aos='fade-up'>
        <h2 className='heading-2'>Domaines D'interventions</h2>
        <br />
        <Carousel
          showArrows={width <= 523 ? false : true}
          pagination={width <= 523 ? true : false}
          itemsToShow={3}
          breakPoints={breakPoints}
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
