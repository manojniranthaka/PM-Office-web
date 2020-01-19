import React from "react";
import "./landing.css";
// import NewsComponent from "./news.component";
import "animate.css/animate.min.css";
import { Slide } from "react-slideshow-image";
import ScrollAnimation from "react-animate-on-scroll";

const slideImages = [
  //   'images/slide_2.jpg',
  //   'images/slide_3.jpg',
  //   'images/slide_4.jpg'
  "https://res.cloudinary.com/dpf1htulz/image/upload/v1579442334/pm/landing1_lrqjqt.png",
  "https://res.cloudinary.com/dpf1htulz/image/upload/v1579442334/pm/landing1_lrqjqt.png",
  "https://res.cloudinary.com/dpf1htulz/image/upload/v1579442334/pm/landing1_lrqjqt.png"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

function Landing() {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
        </div>
      </Slide>
      <section className="ftco-section ftco-intro">
        <div className="container">
          <div className="row justify-content-begin">
            <div className="col-md-6">
              <div className="heading-section ftco-animate">
                <ScrollAnimation animateIn="fadeInUp" duration="0.9">
                  <img
                    className="heading-Image"
                    src="https://res.cloudinary.com/dpf1htulz/image/upload/v1579446315/pm/pmoffice1_e3idow.png"
                  />
                </ScrollAnimation>
              </div>
              <ScrollAnimation animateIn="fadeInUp" duration="0.87">
                <p
                  className="ftco-animate"
                  style={{ fontFamily: "poppins", color: "black" }}
                >
                  <b>
                    Mahinda Rajapaksa was the 5th President of the Democratic
                    Socialist Republic of Sri Lanka. His election for a second
                    term of office in the Presidential Election, held on January
                    26, 2010, saw the Sri Lankan electorate recognising him as
                    the national leader who liberated the country from the
                    terrorism of the Liberation Tigers of Tamil Eelam (LTTE),
                    and set the country on the path to peace, stronger democracy
                    and rapid economic development. The re-election of Mahinda
                    Rajapaksa took place in the first nationwide election held
                    after the defeat of the LTTE in May in 2009,{" "}
                  </b>
                </p>
              </ScrollAnimation>

              <a
                className="ftco-animate"
                href="/president-rajapaksha"
                className="nav-toggle"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-intro">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6">
              <div className="heading-section ftco-animate">
                <ScrollAnimation animateIn="fadeInUp" duration="0.87">
                  <img
                    className= "heading-Image"
                    src="https://res.cloudinary.com/dpf1htulz/image/upload/v1579446315/pm/primemnistersrilanka_deqvwo.png"
                  />
                </ScrollAnimation>
              </div>
              <ScrollAnimation animateIn="fadeInUp" duration="0.87">
                <p
                  className="ftco-animate"
                  style={{ fontFamily: "poppins", color: "black" }}
                >
                  <b>
                    Mahinda Rajapaksa was the 5th President of the Democratic
                    Socialist Republic of Sri Lanka. His election for a second
                    term of office in the Presidential Election, held on January
                    26, 2010, saw the Sri Lankan electorate recognising him as
                    the national leader who liberated the country from the
                    terrorism of the Liberation Tigers of Tamil Eelam (LTTE),
                    and set the country on the path to peace, stronger democracy
                    and rapid economic development. The re-election of Mahinda
                    Rajapaksa took place in the first nationwide election held
                    after the defeat of the LTTE in May in 2009,{" "}
                  </b>
                </p>
              </ScrollAnimation>

              <a
                className="ftco-animate"
                href="/president-rajapaksha"
                className="nav-toggle"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="#news">smothing</div>
    </div>
  );
}
export default Landing;
