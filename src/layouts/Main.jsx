import { Outlet } from "react-router-dom";
import HeaderAlFWZ from "../pages/share/header/HeaderAlFWZ";
import Footer from "../pages/share/footer/Footer";
import ContactBubble from "../pages/share/ContactBubble";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Site Header */}
      <HeaderAlFWZ />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating Contact and Scroll Buttons */}
      <ContactBubble />
    </div>
  );
};

export default MainLayout;
