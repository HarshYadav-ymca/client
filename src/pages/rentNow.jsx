import React from "react";
import NavBar from "../components/navBar";
import RentTop from "../components/renttop";
import Footer from "../components/footer";
import RentBottom from "../components/rentBottom";
function RentPage() {
  return (
    <div>
      <NavBar />
      <RentTop />
      {/* <AboutBottom /> */}
      <RentBottom />
      <Footer />
    </div>
  );
}

export default RentPage;
