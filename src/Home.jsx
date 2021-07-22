import React from "react";

import web from "../src/images/img-1.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name=" Learn with Worlds Best Teachers on"
        imgsrc={web}
        visit="/Courses"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
