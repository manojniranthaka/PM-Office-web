import React from "react";
import "./footer.css";
import ReactBootstrap, {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl
} from "react-bootstrap";

function Footer() {
  return (
      <div className="page-footer font-small indigo">
        <div className="container">
          <div className="row text-center d-flex justify-content-center pt-5 mb-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!">HOME</a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!">NEWS</a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!">PROJECTS</a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!">FUNDS</a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!">MEDIA</a>
              </h6>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row--> */}
          <hr className="rgba-white-light"  />

          {/* <!-- Grid row--> */}
          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
            {/* <!-- Grid column --> */}
            <div className="col-md-8 col-12 mt-5">
              <p >Contact Us</p>
              <p >Carlton House, Tangalle, Sri Lanka.</p>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row--> */}
          <hr
            className="clearfix d-md-none rgba-white-light"
            
          />

          {/* <!-- Grid row--> */}
          <div className="row pb-3">
            {/* <!-- Grid column --> */}
            <div className="col-md-12">
              <div className="mb-5 flex-center">
                {/* <!-- switter --> */}
                <a className="fb-ic" href="https://twitter.com/PresRajapaksa">
                  <i className="fab fa-twitter fa-lg white-text mr-4"> </i>
                </a>
                {/* <!--Instagram--> */}
                <a className="ins-ic" href="https://www.instagram.com/presidentrajapaksa/">
                  <i className="fab fa-instagram fa-lg white-text mr-4"> </i>
                </a>
                {/* <!--facebook--> */}
                <a className="ins-ic" href="https://www.facebook.com/PresidentRajapaksa/">
                  <i className="fab fa-facebook fa-lg white-text mr-4"> </i>
                </a>
              </div>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row--> */}
        </div>
        {/* <!-- Footer Links --> */}

        {/* <!-- Copyright --> */}
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright and Designed by Prime Minister's Office Software Engineering Unit 
        </div>
        {/* <!-- Copyright --> */}
      </div>
  );
}
export default Footer;
