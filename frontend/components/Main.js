import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled, { keyframes } from "styled-components";
import Item from "./Item";
import EncBlock from "./styles/EncBlock";
import GoToShop from "./styles/GoToShop";
import { mainPageItems } from "../config";
import { css } from "@emotion/core";
import { HashLoader } from "react-spinners";
import { ItemsList } from "./Items";
import SickButton from "./styles/SickButton";
import Link from "next/link";
import { ScrollTo } from "react-scroll-to";
import { bounce } from "react-animations";

const THREE_ITEMS_QUERY = gql`
  query THREE_ITEMS_QUERY($skip: Int = 0, $first: Int = ${mainPageItems}) {
    items(first: $first, skip: $skip, orderBy: image_DESC) {
      id
      title
      price
      description
      image
      largeImage
      user { id }
    }
  }
`;

const override = css`
  display: block;
  margin: 20vh auto;
`;

const bounceAnimation = keyframes`${bounce}`;

const ArrowNextBlock = styled.button`
  animation: ${bounceAnimation};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

class Main extends Component {
  render() {
    return (
      <>
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
              <ScrollTo>
                {({ scrollTo }) => (
                  <ArrowNextBlock
                    className="arrow-next-block"
                    onClick={() => scrollTo({ x: 0, y: 420, smooth: true })}
                  >
                    <img src="../static/arrow.svg" />
                  </ArrowNextBlock>
                )}
              </ScrollTo>
              <img
                className="main-car"
                src="../static/gt86.png"
                alt="Toyota GT-86"
              />
            </div>
            <div className="wave" />
          </div>
        </EncBlock>
        <GoToShop>
          <p>
            Maybe some of these <strong>below</strong> will suit?
          </p>
          <Query
            query={THREE_ITEMS_QUERY}
            fetchPolicy="network-only"
            variables={{
              skip: this.props.page * mainPageItems - mainPageItems
            }}
          >
            {({ data, error, loading }) => {
              if (loading)
                return (
                  <HashLoader
                    css={override}
                    sizeUnit={"px"}
                    size={100}
                    color={"#FF268E"}
                  />
                );
              if (error) return <p> Error: {error.message}</p>;
              return (
                <ItemsList>
                  {data.items.map(item => (
                    <Item item={item} key={item.id} />
                  ))}
                </ItemsList>
              );
            }}
          </Query>
          <div className="go-ahead">
            <p>If not, let’s</p>
            <SickButton>
              <Link
                href={{
                  pathname: "/items"
                }}
              >
                <a>GO AHEAD</a>
              </Link>
            </SickButton>
            <p>
              and you will find something <strong>for sure!</strong>
            </p>
          </div>
        </GoToShop>
      </>
    );
  }
}

export default Main;
export { THREE_ITEMS_QUERY };
