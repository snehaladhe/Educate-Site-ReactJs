import React from "react";

import web from "../src/images/success.png";
import logo1 from "../src/images/women-1.jpg";
import logo2 from "../src/images/women-2.jpg";
import logo3 from "../src/images/ceo.jpg";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        remain="means going on the way of Success"
        name=" Learning with "
        imgsrc={web}
        visit="/contact"
        btname="Contact_now"
      />

      <hr />

      <h1 class="met">Meet Our talented and intelligent Staff Members</h1>

      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={logo1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ms XYZ</h5>
              <p>
                Expert in all new the technologies like
                <strong> ML,AI,Robotics and certified Data Scientist </strong>
                and working from 10 years in this IT field.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={logo2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Ms ABC</h5>
              <p>
                Expert in new the technology fields like
                <strong>
                  cloud computing,ethical hacking and certified ethical hacker
                </strong>
                and working from 30 years in this IT field.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={logo3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Mr. PQR</h5>
              <p>
                CEO and organizer of <strong> Educate.</strong>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default About;
