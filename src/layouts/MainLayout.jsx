import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();

const isHome = location.pathname === "/";
  return (
    <div className="layout">
      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <div className={`footer-wrapper ${isHome ? "home-footer" : ""}`}>
  <Footer />
</div>

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
  background:#fff;
}

body{
  overflow-x:hidden;
}

.layout{
  min-height:100vh;
  display:flex;
  flex-direction:column;
}

.main-content{
  flex:1;
}

.footer-wrapper{
  background:#ffffff;
}

.footer-wrapper.home-footer{
  background:#192A5F;
}
`}</style>
    </div>
  );
};

export default MainLayout;