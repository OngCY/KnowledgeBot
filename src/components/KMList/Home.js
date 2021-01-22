import React from "react";
import {CreateBotModal} from ".";
import BotList from "./BotList"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayReportModal from "./DisplayReportModal";

export default function Home() {

  return (
    <React.Fragment>
      <Container fluid="md">
        <Row>
          <CreateBotModal />
        </Row>
        <Row>
          <BotList/>
        </Row>
      </Container>
    </React.Fragment>
  );
}
