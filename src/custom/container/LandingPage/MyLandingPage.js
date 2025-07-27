import { bool, object } from 'prop-types';
import { propTypes } from '../../../util/types';

// Section Components
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import VideoSection from './sections/VideoSection/VideoSection';
import TeamsSection from './sections/TeamsSection/TeamsSection';
import SellersSection from './sections/SellersSection/SellersSection';
import WorkflowSection from './sections/WorkflowSection/WorkflowSection';
import GuideSection from './sections/GuideSection/GuideSection';
import WhyUsSection from './sections/WhyUsSection/WhyUsSection';
import ServicesSection from './sections/ServicesSection/ServicesSection';
import EventsSection from './sections/EventsSection/EventsSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import FooterSection from './sections/FooterSection/FooterSection';

MyLandingPage.propTypes = {
  inProgress: bool,
  pageAssetsData: object,
  error: propTypes.error,
};

function MyLandingPage() {
  return (
    <>
      <HeroSection />
      <WorkflowSection />
      <AboutSection />
      <GuideSection />
      <ServicesSection />
      <SellersSection />
      <WhyUsSection />
      <EventsSection />
      <TestimonialsSection />
      <VideoSection />
      <TeamsSection />
      <FooterSection />
    </>
  );
}

export default MyLandingPage;
