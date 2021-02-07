import React from "react";
//import {CreateBotModal} from ".";
import BotList from "./BotList"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";

export default function Home() {

  return (
    <React.Fragment>
      <Container fluid="md">
        {/*<Row>*/}
          {/*<CreateBotModal />*/}
          {/*<Link to="/createBot">Create Bot</Link>*/}
        {/*</Row>*/}
        <Row>
          Bot List
          <BotList/>
        </Row>
      </Container>
    </React.Fragment>
  );
}
