import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";
import Pagination from "./Pagination";
import { perPage } from "../config";
import Search from "./Search";
import { css } from "@emotion/core";
import { HashLoader } from "react-spinners";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
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

const ItemsBlock = styled.div`
  width: 100%;
`;

const Center = styled.div`
  max-width: calc(${props => props.theme.maxWidth} + 30px);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  @media (max-width: 350px) {
    padding: 2rem 0.5rem;
  }
`;
const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 25px auto;
`;

class Items extends Component {
  render() {
    return (
      <ItemsBlock>
        <Center>
          <Search />
          <Query
            query={ALL_ITEMS_QUERY}
            fetchPolicy="network-only"
            variables={{
              skip: this.props.page * perPage - perPage
              // first: PerPage
            }}
          >
            {({ data, error, loading }) => {
              // if (loading) return <p>Loading...</p>;
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
          <Pagination page={this.props.page} />
        </Center>
      </ItemsBlock>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };
