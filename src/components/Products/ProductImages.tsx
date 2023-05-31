// @ts-nocheck
'use client';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const ProductImages = ({ photos }: { photos: Array<object> }) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={photos[0].src}
          alt={photos[0].alt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={photos[1].src}
            alt={photos[1].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
          <img
            src={photos[2].src}
            alt={photos[2].alt}
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <Slider
          autoplay
          duration={4000}
          previousButton={null}
          nextButton={null}
          slideIndex={0}>
          {photos?.map(photo => (
            <div key={photo} className="bg-center bg-contain bg-no-repeat">
              <img
                className="w-full h-full rounded-lg"
                src={photo.src}
                alt="product Img"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default ProductImages;
