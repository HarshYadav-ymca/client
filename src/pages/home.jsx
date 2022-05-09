import React from "react";
import NavBar from "../components/navBar";
import Home from "../components/homeTop";
import HomeBottom from "../components/homebottom";
import Footer from "../components/footer";

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <HomeBottom />
      <Footer />
    </div>
  );
}

export default HomePage;
