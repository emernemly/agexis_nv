import React, { useEffect } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

const ImgComarison = () => {
  return (
    <div>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage src='/img/Bend-.jpg' alt='Image one' />
        }
        itemTwo={
          <ReactCompareSliderImage src='/img/iStock.jpg' alt='Image two' />
        }
      />
    </div>
  );
};

export default ImgComarison;
