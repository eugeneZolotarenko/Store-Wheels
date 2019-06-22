import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import { css } from "@emotion/core";
import { BeatLoader } from "react-spinners";

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const addCartSpinner = css`
  background-color: #ff268e;
`;

class AddToCart extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(addToCart, { loading }) => {
          if (loading)
            return (
              <BeatLoader
                css={addCartSpinner}
                sizeUnit={"px"}
                size={11}
                color={"#FFF"}
              />
            );
          return (
            <button disabled={loading} onClick={addToCart}>
              Add{loading && "ing"} To Cart
            </button>
          );
        }}
      </Mutation>
    );
  }
}
export default AddToCart;
