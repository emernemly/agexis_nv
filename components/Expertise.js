import React, { useEffect } from 'react';
import expertise_pic_up from './assets/img/expertise_pic_up.png';
import expertise_pic_down from './assets/img/expertise_pic_down.png';
import roue_expertise from './assets/img/roue_expertise.png';
import Fonctionelle from './assets/logo/fonctionelle';
import Technique from './assets/logo/technique';
import Travers from './assets/logo/travers';
import CadreUp from './assets/logo/cadre_up';

import Image from 'next/image';
const Expertise = () => {
  return (
    <div className='_container'>
      <div className='container_expertise container ' data-aos='fade-right'>
        <div className='images'>
          <div className='bg'>
            <Image className='roue' src={roue_expertise} alt='roue_expertise' />
          </div>

          <div className='up'>
            {' '}
            <div className='img'>
              <Image src={expertise_pic_up} alt='expertise_pic_up' />
            </div>
            <div className='Num projects'>
              <h4>250</h4> <p>Porjets réalisés</p>
            </div>
          </div>
          <div className='down'>
            {' '}
            <div className='Num employes'>
              <h4>75</h4> <p>Employés</p>
            </div>{' '}
            <div className='img'>
              <Image
                src={expertise_pic_down}
                alt='expertise_pic_down'
                layout='responsive'
              />
            </div>
          </div>
        </div>
        <div className='expertise'>
          <div className='discreption'>
            <div className='title tsize'>
              <h2>
                Nos Expertises <CadreUp />
              </h2>
            </div>
            <p>
              De la définition du process jusqu'a la livraison des
              batiments.nous mettons nos connaissances et nos compétences a
              votre disposition pour produire des études fiables, précises et
              pertinentes conformément aux besoins de vos projets.
            </p>
          </div>
          <div className='type-expetise'>
            <div className='type fonctionnel'>
              <div className='svg-content svg-fonc'>
                {' '}
                <Fonctionelle />
              </div>

              <div className='définition'>
                <h3>Expertise fonctionnnel</h3>

                <p>
                  De la définition du process jusqu'a la livraison des batiments
                  nous mettons.
                </p>
              </div>
            </div>
            <div className='type technique'>
              <div className='svg-content'>
                <Technique />
              </div>

              <div className='définition'>
                <h3>Expertise technique</h3>
                <p>
                  De la définition du process jusqu'a la livraison des
                  batiments,nous mettons nos connaissances
                </p>
              </div>
            </div>
            <div className='type transverses'>
              <div className='svg-content'>
                {' '}
                <Travers />
              </div>

              <div className='définition'>
                <h3>Expertise transverses</h3>
                <p>
                  {' '}
                  De la définition du process jusqu'a a la livraision ds
                  batiments,nous mettons nos connaissances
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
