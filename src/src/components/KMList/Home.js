import React from "react";
import {CreateBotModal } from ".";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <React.Fragment>
      <Container fluid="md">
        <Row>
          <CreateBotModal />
        </Row>
        <Row>
    
        </Row>
      </Container>
    </React.Fragment>
  );
}
