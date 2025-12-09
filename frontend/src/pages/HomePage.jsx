import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import AboutUs from '../components/sections/AboutUs';
import Services from '../components/sections/Services';
import ProjectsSection from '../components/ProjectsSection';
import ClientsSection from '../components/ClientsSection';
import Testimonials from '../components/sections/Testimonials';
import CallToAction from '../components/sections/CallToAction';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <AboutUs />
      <Services />
      <ProjectsSection />
      <ClientsSection />
      <Testimonials />
      <CallToAction />
      <ContactForm />
      <Newsletter />
      <Footer />
    </div>
  );
}
