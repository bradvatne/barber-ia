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
  CardHeader,
  CardText,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";

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
                  <hr/>
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
                  <Card>
                    <CardHeader><span className="custom-card-title">Quick Trim</span></CardHeader>
                    <CardBody>
                      <i className="icon-large icon icon-info nc-icon nc-user-run" />
                      <CardText>
                        For those times when you're in a rush and just want a
                        quick haircut.
                      </CardText>
                      <Button color="primary">20 000 rp</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card>
                    <CardHeader><span className="custom-card-title">Full Package</span></CardHeader>
                    <CardBody>
                      <i className="icon icon-info icon-large nc-icon nc-scissors" />
                      <CardText>
                        Treat yourself to a full haircut and complete the look
                        with a fresh straight razor shave.
                      </CardText>
                      <Button color="primary">30 000 rp</Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card>
                    <CardHeader><span className="custom-card-title">Straight-Razor Shave</span></CardHeader>
                    <CardBody>
                      <i className="icon-large icon icon-info nc-icon nc-satisfied" />
                      <CardText>
                        Clean up your look with a classic soapy straight razor
                        shave.
                      </CardText>
                      <Button color="primary">20 000 rp</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"about"}>
          <div className="section section-dark text-center">
            <Container>
              <h2 className="title">About Us</h2>
              <hr/>
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/headshot.png")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Tedi Alfan</CardTitle>
                      <h6 className="card-category">Head Barber</h6>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    I moved to Bali from 3 years ago from Jember, East Java with my wife and my child. Following my passion for hair design, I decided to open a shop where I serve locals and tourists with clean, great looking haircuts for the cheapest price in Bali. I take great pride in my work and I love to get people looking and feeling their best without breaking their wallets. I hope to see you soon!
                  </p>
                </CardBody>
               
              </Card>
            </Container>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={"location"}>
          <div className="section landing-section">
            <Container>
              <h2 className="text-center">Visit Us Today</h2>
              <hr/>
              <p className="text-center">
              <strong>We're easy to find on the Southwest corner of Jl. Nakula and Jl. Pandawa, beside Angel Ink.</strong><br/>
              <strong>Just look for the sign that says "Potong Rambut" (Haircut)</strong><br/>
              <strong>Open 9:00 to 17:00 daily (Closed Sundays)</strong>
              </p>
              <br />
              <div className="leaflet-container">
                <LeafMap />
              </div>
            </Container>
          </div>
        </ScrollableAnchor>
        <div className="section section-dark footer-text">
          <Container>
            <Row>
              <Col sm="4">
                <div>
                  <h1>
                    barber <span className="text-blue">ia</span>
                  </h1>
                </div>
                <br/>
              </Col>
              <Col sm="4">
                <div>
                  <h3>Contact Information</h3>
                  <hr/>
                  <p>+62 012 3456 798</p>
                  <p>barberiabali@gmail.com</p>
                  <p>
                    Beside Angel Ink Jl. Pandawa No.3, Legian, Kuta, Kabupaten Badung,
                    Bali 80361
                  </p>
                </div>
              </Col>
              <Col sm="4">
                <div>
                  <h3>Links</h3>
                  <hr/>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>Google Reviews</p>
                  <p>Made with love by Brad Vatne</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
