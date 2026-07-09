import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
 
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import CustomerApp from "../pages/Services/CustomerApp/CustomerApp";
import VendorApp from "../pages/Services/VendorApp/VendorApp";
import DeliveryPartner from "../pages/Services/DeliveryPartner/DeliveryPartner";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
 
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/services/customer" element={<CustomerApp />} />
        <Route path="/services/vendor" element={<VendorApp />} />
        <Route path="/services/delivery" element={<DeliveryPartner />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
    </Routes>
  );
};
 
export default AppRoutes;
 