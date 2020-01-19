import React from "react";
import "./mrfull.css";

import ReactBootstrap, {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

function Mrfull() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src="https://res.cloudinary.com/dpf1htulz/image/upload/v1579446315/pm/primemnistersrilanka_deqvwo.png" className="pm2" />

          <div className="container">

            <h5 className="font3">
              Mahinda Rajapaksa was the 5th President of the Democratic
              Socialist Republic of Sri Lanka. His election for a second term of
              office in the Presidential Election, held on January 26, 2010, saw
              the Sri Lankan electorate recognising him as the national leader
              who liberated the country from the terrorism of the Liberation
              Tigers of Tamil Eelam (LTTE), and set the country on the path to
              peace, stronger democracy and rapid economic development. The
              re-election of Mahinda Rajapaksa took place in the first
              nationwide election held after the defeat of the LTTE in May in
              2009, and the first where people from all parts of the country
              were free to participate in elections after more than two decades.{" "}
            </h5>
          </div>
        </div>
        <div className="col">
          <img src="https://res.cloudinary.com/dpf1htulz/image/upload/v1579446314/pm/mr_qkztdz.jpg" className="pm3" />
        </div>
      </div>
    </div>
  );
}
export default Mrfull;
