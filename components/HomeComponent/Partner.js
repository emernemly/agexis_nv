import React from 'react';
import Carousel from 'react-elastic-carousel';
import Paris from '../../public/img/logo_pari-min.webp';
import Parc from '../../public/img/logo_parc-min.webp';
import ISG from '../../public/img/logo_svg-min.webp';
import Opera from '../../public/img/logo_opera-min.webp';
import Image from 'next/image';
const Partner = () => {
  const breakPoints = [
    { width: 603, itemsToShow: 1 },
    { width: 900, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div className='partner' data-aos='fade-up'>
      <Carousel
        showArrows={false}
        breakPoints={breakPoints}
        pagination={false}
        itemsToShow={3}
      >
        <div className='partner-item'>
          <Image src={Paris} alt='Paris' />
        </div>
        <div className='partner-item'>
          <Image src={Parc} alt='Parc' />
        </div>
        <div className='partner-item igs'>
          <Image src={ISG} alt='IGS' />
        </div>
        <div className='partner-item'>
          <Image src={Opera} alt='Opera' />
        </div>
      </Carousel>
    </div>
  );
};

export default Partner;
