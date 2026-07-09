import FAQs from "../../components/FAQs/FAQs";
import Cities from "../../components/home/Cities";
const Home = () => {
  return (
    <div>
    
    {/* <section id="why-zestbot">
    <WhyZestBot />
  </section> */}

  <Cities />

  <section id="faqs">
    <FAQs />
  </section>
    </div>
  );
};

export default Home;