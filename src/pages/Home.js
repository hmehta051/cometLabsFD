import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import MultorShow from "../components/MultorShow";
import Card from "../components/Card";
import SpaceText from "../components/SpaceText";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Category />
      <MultorShow />
      <Card />
      <SpaceText />
      <Footer />
    </div>
  );
};

export default Home;
