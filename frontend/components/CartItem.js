import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import formatMoney from "../lib/formatMoney";

const CartItemStyles = styled.li``;

const CartItem = ({ cartItem }) => (
  <CartItemStyles>
    <img width="100px" src={cartItem.item.image} alt={cartItem.item.title} />
    <div className="cart-item-details"></div>
  </CartItemStyles>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
