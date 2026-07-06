import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />

      <style>{`
        .layout{
          min-height:100vh;
          display:flex;
          flex-direction:column;
        }

        .main-content{
          flex:1;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;