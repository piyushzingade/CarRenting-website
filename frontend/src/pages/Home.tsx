import Book from '../components/Book';
import Contact from '../components/Contacts';
import Faq from '../components/Faq';
import FeaturedCars from '../components/FeaturedCars';
import Herosection from '../components/Herosection';
import PricingPlans from '../components/PricingPlans';
import SpecialOffers from '../components/SpecialOffer';
import Testimonial from '../components/Testimonial';
import TourPackages from '../components/TourPackages';

export default function Home() {
  return (
    <div>
      <Herosection />
      <FeaturedCars/>
      <TourPackages/>
      <SpecialOffers/>
      <Book/>
      <PricingPlans/>
      <Testimonial/>
      <Faq/>
      <Contact/>
    </div>
  );
}
