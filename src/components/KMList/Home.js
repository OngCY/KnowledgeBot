import React from "react";
import BotList from "./BotList"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <BotList/>
        </Row>
      </Container>
    </React.Fragment>
  );
}
