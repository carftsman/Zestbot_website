
import Hero from "../../components/home/Hero";
import Cards from "../../components/home/Cards";
import DeliveryShowcase from "../../components/home/DeliveryShowcase";
import FAQs from "../../components/FAQs/FAQs";
import Cities from "../../components/home/Cities";
import Partners from "../../components/home/Partners";
import WhyChoose from "../../components/home/WhyChoose";
import DownloadApp from "../../components/home/DownloadApp";

import PageTracker from "../../Gtm/PageTracker";
import MetaPageTracker from "../../Gtm/MetaPageTracker";
import AnalyticsPageTracker from "../../Gtm/AnalyticsPageTracker";

const Home = () => {
 

  return (
    <>
      <PageTracker />
      <MetaPageTracker />
      <AnalyticsPageTracker />
      <Hero />

      <Cards />
      <DeliveryShowcase />
      {/* <Cards /> */}
      <section id="WhyChoose">
        <WhyChoose />
      </section>

      <DownloadApp />

      <section id="faqs">
        <FAQs />
      </section>
      <Cities />
    </>
  );
};

export default Home;
