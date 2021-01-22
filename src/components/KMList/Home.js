import React from "react";
import {CreateBotModal} from ".";
import BotList from "./BotList"
import ReportItem from "./ReportItem"
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
          <ReportItem/>    
        </Row>
      </Container>
    </React.Fragment>
  );
}
