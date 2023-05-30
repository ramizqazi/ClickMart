import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { deals, DealsType } from './Deals';
import './dealsSlider.css';
import './dealsSliderAnimation.css';

const HomeDeals = () => (
  <Slider className="slider-wrapper">
    {deals.map((item: DealsType) => {
      return (
        <div
          key={item.title}
          style={{ backgroundImage: `url(${item.image})` }}
          className="slider-content relative bg-center bg-cover bg-no-repeat">
          <div className="inner">
            <p>{item.description}</p>
            <h1>{item.title}</h1>
            <button type="button" className="bg-red-600 rounded-full px-4 py-2">
              {item.button}
            </button>
          </div>
        </div>
      );
    })}
  </Slider>
);

export default HomeDeals;
