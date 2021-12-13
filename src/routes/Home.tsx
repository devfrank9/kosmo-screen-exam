import React from "react";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import BannerMenu from "../components/Home/BannerMenu";
import ContactMenu from "../components/Home/ContactMenu";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <BannerMenu />
      <ContactMenu />
      <Footer />
    </>
  );
};

export default Home;
