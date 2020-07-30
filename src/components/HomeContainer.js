import React from "react";
import api from "../services/api";
import ItemCard from "./ItemCard";
import { Button, Container, Row, Col } from "react-bootstrap";
class HomeContainer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <h3 className="header_text">What We Offer:</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <ItemCard></ItemCard>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <Button className="button" href="/meal">
              View This Week's Offerings
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;
