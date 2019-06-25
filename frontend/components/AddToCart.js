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

// const addCartSpinner = css`
//   min-width: 126px;
//   min-height: 32px;
//   margin: 5px;
//   background-color: #8ba390;
//   border: none;
//   font-family: Montserrat;
//   border-radius: 10px;
//   font-size: 18px;
//   padding: 5px 10px;
// `;

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
              <button
                className="loading-add-btn"
                disabled={loading}
                onClick={addToCart}
              >
                <BeatLoader sizeUnit={"px"} size={10} color={"#FFF"} />
              </button>
            );
          return (
            <button disabled={loading} onClick={addToCart}>
              Add To Cart
            </button>
          );
        }}
      </Mutation>
    );
  }
}
export default AddToCart;
