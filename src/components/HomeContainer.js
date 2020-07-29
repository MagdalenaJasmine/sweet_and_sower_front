import React from "react";
import api from "../services/api";
import ItemCard from "./ItemCard";
import { Button } from "react-bootstrap";
class HomeContainer extends React.Component {
  render() {
    return (
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
    );
  }
}

export default HomeContainer;
