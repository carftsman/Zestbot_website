import FAQs from "../../components/FAQs/FAQs";
import Cities from "../../components/home/Cities";
import WhyChoose from "../../components/home/WhyChoose";
import Hero from "../../components/home/Hero";
const Home = () => {
  return (
    <div>
      
    <section id="WhyChoose">
    <WhyChoose />
  </section>

  <Cities />

  <section id="faqs">
    <FAQs />
  </section>
    </div>
  );
};

export default Home;