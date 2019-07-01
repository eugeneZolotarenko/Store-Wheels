import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import User from "./User";
import ButtonList from "./ButtonList";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
          <ItemStyles>
            <Link
              href={{
                pathname: "/item",
                query: { id: item.id }
              }}
            >
              {item.image && <img src={item.image} alt={item.title} />}
            </Link>

            <Title>
              <Link
                href={{
                  pathname: "/item",
                  query: { id: item.id }
                }}
              >
                <a>{item.title}</a>
              </Link>
            </Title>
            <PriceTag>{formatMoney(item.price)}</PriceTag>
            <p>{item.description}</p>
            <ButtonList item={item} />
          </ItemStyles>
    );
  }
}
