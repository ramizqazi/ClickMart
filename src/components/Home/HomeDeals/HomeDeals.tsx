import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import DealsContent from './Deals.json';
import './dealsSlider.css';
import './dealsSliderAnimation.css';

const HomeDeals = () => (
  <Slider className="slider-wrapper">
    {DealsContent.map((item: any, index: any) => {
      const bg = require('../../../assets/images/deal-poster1.jpg');
      return (
        <div
          key={item.title}
          className="slider-content bg-center bg-cover bg-no-repeat">
            <div>
            </div>
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button type='button' className='bg-red-600 px-4 py-2'>{item.button}</button>
          </div>
        </div>
      )
    })}
  </Slider>
);

export default HomeDeals;
