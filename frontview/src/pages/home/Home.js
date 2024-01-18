import React from "react";
import SmNav from "../../components/smnav/SmNav";
import Nav from "../../components/nav/Nav";
import Header from "../../components/header/Header";
import FeatureProperties from "../../components/feautrue-properties/FeatureProperties";
import Client from "../../components/client/Client";

const Home = () => {
  return (
    <div>
      <SmNav />
      <Nav />
      <Header />
      <FeatureProperties />
      <Client />
    </div>
  );
};

export default Home;
