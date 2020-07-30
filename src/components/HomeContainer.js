import React from "react";
import api from "../services/api";
import ItemCard from "./ItemCard";
import { Button, Container, Row, Col } from "react-bootstrap";
class HomeContainer extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <div className="header_text">
              {" "}
              What We Offer:
              <div>
                <ItemCard></ItemCard>
                <Button className="button" href="/meal">
                  View This Week's Offerings
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeContainer;
