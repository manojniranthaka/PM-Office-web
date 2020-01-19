import React from "react";
import "./header.css";


import ReactBootstrap, {
  Navbar,
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";

function Header() {
  
  return (
    <div>
      <Navbar scrolling dark bg="light" fixed="top">
      {/* <Navbar scrolling dark expand="md" fixed="top"> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="#news">NEWS</Nav.Link>
            <Nav.Link href="#products">PRODUCTS</Nav.Link>
            <Nav.Link href="#media">MEDIA</Nav.Link>
            <Nav.Link href="#charity">CHARITY</Nav.Link>
          </Nav>
          <img
            className="national-icon"
            src="https://res.cloudinary.com/dpf1htulz/image/upload/v1579442803/pm/LOGO_vakeve.png"
          />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {/* <div className="input-group md-form form-sm form-2 pl-0">
              <input
                className="form-control my-0 py-1 amber-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <span
                  className="input-group-text amber lighten-3"
                  id="basic-text1"
                >
                  <i className="fas fa-search text-grey" aria-hidden="true"></i>
                </span>
              </div>
            </div> */}
            <Button variant="outline-dark" href="/shop">
              SHOP
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
