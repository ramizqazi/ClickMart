/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { ComponentProps, useState } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const ProductDetailsPhotos = ({
  photos,
}: {
  photos: Array<string> | undefined;
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div className="flex-col w-full lg:w-1/3">
      <div className="w-full">
        <Slider
          slideIndex={0}
          onSlideChange={(e: Event | any) => setSlideIndex(e.slideIndex)}>
          {photos?.map(photo => (
            <div key={photo} className="bg-center bg-contain bg-no-repeat">
              <img className="w-full h-full rounded-lg" src={photo} alt="product Img" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex space-x-5 px-10 justify-between  my-5 ">
        {photos?.map((p, i) => (
          <div
            key={i}
            className={`w-20 h-20  rounded-lg border-${
              slideIndex === i ? '2' : '1'
            } border-${slideIndex === i ? 'red-500' : 'gray-400'}`}>
            <img className="w-full h-full  rounded-lg" src={p} alt="product Img" />
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line max-len
const propsAreEqual = (
  prevProps: ComponentProps<any>,
  nextProps: ComponentProps<any>,
) => prevProps.photos.toString() === nextProps.photos.toString();

export default React.memo(ProductDetailsPhotos, propsAreEqual);
