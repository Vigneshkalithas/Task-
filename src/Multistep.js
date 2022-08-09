import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "./Components/MasterForm";
import { Container, Row, Col } from "reactstrap";

import "./App.css";

function Multistep() {
  return (
    <>
      <div className="container containerapp">
        <Helmet></Helmet>
        <Container>
          <Row>
            <Col>
              <MasterForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Multistep;
