import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import ImageSection from "../components/ImageSection";
import Location from "../components/Location";
import OurServicesSection from "../components/OurServicesSection";
import ServicesImages from "../components/ServicesImages";
import TeamSection from "../components/TeamSection";
const Home = () => {



  return (
    <div className="w-screen h-screen">
      {/* image Section  */}
      <ImageSection />
      {/* 3 images Section  */}
      <ServicesImages />
      <br />
      <br />
      <br />
      <ExperienceSection />
      <OurServicesSection />
      <TeamSection />
      <Location />
      <Footer/>
    </div>
  );
};

export default Home;
