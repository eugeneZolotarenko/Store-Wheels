import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import User from "./User";
import ButtonList from "./ButtonList";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";

const SingleItemStyles = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: calc(100vh - 70px);
  .item-image {
    width: 80%;
    height: 80%;
    object-fit: contain;
    align-self: center;
    justify-self: center;
    @media (max-width: 800px) {
      width: 100%;
      height: 100%;
    }
  }
  .datails {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 1rem;
    box-sizing: border-box;
    h2 {
      font-size: 2.5rem;
      text-align: center;
    }
    .buttonList {
      justify-content: center;
      flex-wrap: wrap;
      display: flex;
      margin: 1em 0;
      width: 100%;
      a,
      button {
        background-color: ${props => props.theme.olive};
        border: none;
        color: white;
        font-family: Montserrat;
        border-radius: 10px;
        font-size: 18px;
        padding: 5px 10px;
        margin: 5px;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          background: ${props => props.theme.pink};
          box-shadow: ${props => props.theme.buttonShadow};
        }
        @media (max-width: 400px) {
          margin-left: 0;
          margin-right: 0;
        }
      }
      .loading-add-btn {
        min-width: 125.5px;
      }
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      price
      user {
        id
      }
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.item) return <p>No Item Found for {this.props.id}</p>;
          const item = data.item;
          return (
            <User>
              {({ data: { me } }) => (
                <SingleItemStyles>
                  <Head>
                    <title>Store Wheels | {item.title}</title>
                  </Head>
                  <img
                    className="item-image"
                    src={item.largeImage}
                    alt={item.title}
                  />
                  <div className="datails">
                    <h2>Viewing {item.title}</h2>
                    <p>{item.description}</p>
                    <PriceTag>{formatMoney(item.price)}</PriceTag>
                    <ButtonList item={item} />
                  </div>
                </SingleItemStyles>
              )}
            </User>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
