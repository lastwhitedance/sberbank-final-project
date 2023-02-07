import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main__inner">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
