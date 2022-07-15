import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import Link from 'next/link';
const ImgComarison = () => {
  return (
    <section className='allcomparision'>
      <div className='container'>
        {' '}
        <h2 className='heading-2'>Réferences</h2>
        <br />
        <div className='allimg'>
          <div className='comparision' data-aos='zoom-in'>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src='/img/Bend--min.webp'
                  alt='Image one'
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/img/iStock-min.webp'
                  alt='Image two'
                />
              }
            />
          </div>
          <div className='comparision' data-aos='zoom-in'>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src='/img/Bend--webp.jpg'
                  alt='Image one'
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/img/iStock-min.webp'
                  alt='Image two'
                />
              }
            />
          </div>
        </div>
        <br />
      </div>{' '}
      <Link href='/'>
        <div>
          <button className='primary-btn '>Lire la suite {'>'}</button>{' '}
        </div>
      </Link>
    </section>
  );
};

export default ImgComarison;
