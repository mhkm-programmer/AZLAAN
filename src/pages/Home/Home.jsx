import HeroSlider from "./heroBanner.jsx/HeroSlider";
import PageTitle from "../reusable/PageTitle";
import RecentServiceCard from "../service/RecentServiceCard";
import WhyChoose from "./WhyChoose";
import OurClient from "./OurClient";
import CustomerReviews from "./CustomerReviews";
import SubscribeContact from "../contact/SubscreibeContact"; // ✅ Corrected spelling from SubscreibeContact

const Home = () => {
  return (
    <div className="home-page">
      {/* Meta Page Title */}
      <PageTitle title="HOME | AZLAAN CONTRACTING W.L.L | Interior & Event Solutions in Qatar" />

      {/* Hero Banner Section */}
      <HeroSlider />

      {/* Recent Services */}
      <RecentServiceCard />

      {/* Why Choose Us Section */}
      <WhyChoose />

      {/* Our Clients Section */}
      <OurClient />

      {/* Customer Testimonials */}
      <CustomerReviews />

      {/* Contact / Subscription Section */}
      <SubscribeContact />
    </div>
  );
};

export default Home;
