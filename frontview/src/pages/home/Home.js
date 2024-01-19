import React from "react";
import Header from "../../components/header/Header";
import FeatureProperties from "../../components/feautrue-properties/FeatureProperties";
import Client from "../../components/client/Client";
import Faq from "../../components/faq/Faq";
import Today from "../../components/today/Today";

const Home = () => {
  return (
    <div>
      <Header />
      <FeatureProperties />
      <Client />
      <Faq />
      <Today />
    </div>
  );
};

export default Home;
