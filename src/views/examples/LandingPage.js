/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// brad's custom plugins
import { LeafMap } from "components/Leaflet/Map.js";
import ScrollableAnchor from "react-scrollable-anchor";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <ScrollableAnchor id={"prices"}>
          <div className="section text-center">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">
                    The Barber with the Best Deal in Bali
                  </h2>
                  <h5 className="description">
                    At Barber Ia, you get the best for less. Stop by when you
                    are nearby Legian, Seminyak, or Kuta for an authentic local
                    barber experience. Whether you're looking for a quick shave,
                    a fresh fade, or a completly new do, we'll get you sorted at
                    an unbeatable price.
                  </h5>
                  <br />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col sm="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-user-run" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Quick Trim</h4>
                      <p className="description">
                        <br />
                        For those times when you're in a rush and just want a
                        quick haircut.
                        <br />
                        <br />
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        20 000 rp
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-scissors" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Straight-Razor Shave</h4>
                      <br />
                      <p>
                        Clean up your look with a classic soapy straight razor
                        shave.
                        <br />
                        <br />
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        20 000 rp
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="info">
                    <div className="icon icon-info">
                      <i className="nc-icon nc-chart-bar-32" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Full Package</h4>
                      <br />
                      <p>
                        Treat yourself to a full haircut or fade with
                        razer-clean lines, and complete the look with a fresh
                        straight razor shave.
                      </p>
                      <Button className="btn-link" color="info" href="#pablo">
                        30 000 rp
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
        <div className="section section-dark text-center">
            <Container>
              <h2 className="title">About Us</h2>
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Henry Ford</CardTitle>
                      <h6 className="card-category">Product Manager</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Teamwork is so important that it is virtually impossible for
                    you to reach the heights of your capabilities or make the
                    money that you want without becoming very good at it.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Container>
        </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"location"}>
        <div className="section landing-section">
            <Container>
              <h2 className="text-center">Visit Us Today</h2>
              <br />
              <div className="leaflet-container">
                <LeafMap />
              </div>
            </Container>
        </div>
        </ScrollableAnchor>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
