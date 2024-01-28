import React from "react";
import Header from "../../components/header/Header";
import {HomeFeatureProperties} from "../../components/feautrue-properties/CustomFeatureProperties";
import Client from "../../components/client/Client";
import Faq from "../../components/faq/Faq";
import Today from "../../components/today/Today";
import Section from "../../components/velo/Section";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <HomeFeatureProperties  />
      <Client />
      <Faq />
      <Section />
      <Today /> */}
    </div>
  );
};

export default Home;
