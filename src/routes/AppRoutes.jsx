import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
 
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import CustomerApp from "../pages/Services/CustomerApp/CustomerApp";
import VendorApp from "../pages/Services/VendorApp/VendorApp";
import DeliveryPartner from "../pages/Services/DeliveryPartner/DeliveryPartner";
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
        
        

      </Route>
    </Routes>
  );
};
 
export default AppRoutes;
 