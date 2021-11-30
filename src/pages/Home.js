import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
        {/* //Navbar having all the menu */}
      <Navbar />
      {/* //Hero component which is big image in between */}
      <Hero>
          {/* Banner having title about website */}
        <Banner
          title="New Way of Working.."
          subtitle="Cost Efficient Rooms starting at ₹ 100"
        >
          <Link to="/rooms" className="btn-primary">
            Explore Properties
          </Link>
        </Banner>
      </Hero>
      {/* this component has all the details about properties */}
      <FeaturedRooms />
      {/* This component has free services provided by the website */}
      <Services />
    {/* This component has social links of website */}
      <SocialLinks />
    </div>
  );
};

export default Home;
