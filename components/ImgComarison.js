import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import CadreUp from './assets/logo/cadre_up';
const ImgComarison = () => {
  return (
    <div className='allcomparision'>
      <div className='container'>
        {' '}
        <div className='title tsize'>
          <h2>
            Nos Projets <CadreUp />
          </h2>
        </div>
        <div className='allimg'>
          <div className='comparision' data-aos='zoom-in'>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src='/img/Bend-.jpg' alt='Image one' />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/img/iStock.jpg'
                  alt='Image two'
                />
              }
            />
          </div>
          <div className='comparision' data-aos='zoom-in'>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage src='/img/Bend-.jpg' alt='Image one' />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src='/img/iStock.jpg'
                  alt='Image two'
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgComarison;
