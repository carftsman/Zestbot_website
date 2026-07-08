import Hero from "../../components/home/Hero";
import Cards from "../../components/home/Cards";
import DeliveryShowcase from "../../components/home/DeliveryShowcase";
// import ZestBot from "../../components/home/ZestBot";
import Cities from "../../components/home/Cities";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <DeliveryShowcase />
      {/* <ZestBot /> */}
      <Cities />
    </>
  );
};

export default Home;