import React from "react";
import Desc from "./Desc"
import Why from "./Why"
import Footer from '../Footer'
import Carousel from "./Carousel"
import Logo from "./Logo"


function Home() {
  return (
    <div>
      <Logo />
      <Carousel style = {{zIndex: "-1"}} />
      <Desc />
      <Why />
      <Footer />
    </div>
  );
}

export default Home;
