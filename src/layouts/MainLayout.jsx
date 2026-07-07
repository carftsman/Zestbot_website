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
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        html,
        body,
        #root{
          width:100%;
          min-height:100%;
          background:#192A5F;
        }

        body{
          background:#192A5F;
          overflow-x:hidden;
        }

        .layout{
          min-height:100vh;
          display:flex;
          flex-direction:column;
          background:#192A5F;
        }

        .main-content{
          flex:1;
          background:#192A5F;
        }
      `}</style>
    </div>
  );
};

export default MainLayout;