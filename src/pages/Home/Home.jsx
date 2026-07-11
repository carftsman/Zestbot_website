import Hero from "../../components/home/Hero";
import Cards from "../../components/home/Cards";
import DeliveryShowcase from "../../components/home/DeliveryShowcase";
// import ZestBot from "../../components/home/ZestBot";
import FAQs from "../../components/FAQs/FAQs";
import Cities from "../../components/home/Cities";
import Partners from "../../components/home/Partners";
import WhyChoose from "../../components/home/WhyChoose";
import DownloadApp from "../../components/home/DownloadApp";
// import TermsConditions from "../../components/home/Terms&Conditions";
// import CookieConsent from "../../components/home/CookieConsent";
const Home = () => {
  return (
    <>
      <Hero />
      {/* <CookieConsent/> */}
      
      <DeliveryShowcase />
      <Cards />
      <section id="WhyChoose">
        <WhyChoose />
      </section>
      {/* <Partners /> */}
     
      <DownloadApp/>
     

      
    

  

  <section id="faqs">
    <FAQs />
  </section>
   <Cities />
   {/* <section id="Termsconditions">
    <TermsConditions />
  </section> */}
  
    </>
  );
};

export default Home;
