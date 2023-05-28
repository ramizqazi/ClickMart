import Img1 from '../../../assets/images/deal-poster1.jpg';
import Img2 from '../../../assets/images/deal-poster2.jpg';
import Img3 from '../../../assets/images/deal-poster3.jpg';
import Img4 from '../../../assets/images/deal-poster4.jpg';

export interface DealsType {
  title: string,
  description: string,
  button: string,
  image: string
}

export const deals = [
  {
    title: 'Welcome to E-Com Online  Clothing Store!',
    description:
      'The official E-Com online store in Pakistan. shop from exclusive range of new arrivals & latest  trends',
    button: 'Read More',
    image: Img1.src,
  },
  {
    title: 'We Provide the biggest trendy collection',
    description:
      'Explore though our site and get discount on your Favorite  items',
    button: 'Discover',
    image: Img2.src,
  },
  {
    title: 'Latest Summer Arrivals',
    description: 'Latest Summer Arrivals For Men',
    button: 'Order Now',
    image: Img3.src,
  },
  {
    title: 'Stylish Jewelry',
    description: 'Get your stylish jewelry on discount of 50%',
    button: 'Buy now',
    image: Img4.src,
  },
];
