import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";
import EncBlock from "./styles/EncBlock";
import Pagination from "./Pagination";
import { perPage } from "../config";

class Main extends Component {
  render() {
    return (
      <EncBlock>
        <div className="encourage-block">
          <div className="encourage-wrapper">
            <div className="encourage-words">
              <h1>
                Looking for stylish wheels
                <br />
                for your car?
                <br />
                <br />
                So, Let’s go!
              </h1>
            </div>
            <button className="arrow-next-block">
              <img src="../static/arrow.svg" />
            </button>
            <img
              className="main-car"
              src="../static/gt86.png"
              alt="Toyota GT-86"
            />
          </div>
          <div className="wave" />
        </div>
      </EncBlock>
    );
  }
}

export default Main;
