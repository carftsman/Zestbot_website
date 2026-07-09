import Hero from "../../components/home/Hero";
import Cards from "../../components/home/Cards";
import DeliveryShowcase from "../../components/home/DeliveryShowcase";
// import ZestBot from "../../components/home/ZestBot";
import FAQs from "../../components/FAQs/FAQs";
import Cities from "../../components/home/Cities";
import Partners from "../../components/home/Partners";
import WhyChoose from "../../components/home/WhyChoose";
import DownloadApp from "../../components/home/DownloadApp";
const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <DeliveryShowcase />
      <section id="WhyChoose">
        <WhyChoose />
      </section>
      <Partners />
      <Cities />
      <DownloadApp/>
      <section id="faqs">
        <FAQs />
      </section>

    </>
  );
};

export default Home;
