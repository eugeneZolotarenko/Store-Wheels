import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";
import User from "./User";

class ButtonList extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <User>
        {({ data: { me } }) => (
          <div className="buttonList">
            {me &&
              me.permissions.some(permission =>
                ["ADMIN", "ITEMUPDATE"].includes(permission)
              ) && (
                <Link
                  href={{
                    pathname: "update",
                    query: { id: item.id }
                  }}
                >
                  <a>Edit</a>
                </Link>
              )}
            {!me && (
              <Link
                href={{
                  pathname: "/signup"
                }}
              >
                <a>Let's Sign In and buy it!</a>
              </Link>
            )}
            {me && <AddToCart id={item.id} />}
            {me &&
              me.permissions.some(permission =>
                ["ADMIN", "ITEMDELETE"].includes(permission)
              ) && <DeleteItem id={item.id}>Delete</DeleteItem>}
          </div>
        )}
      </User>
    );
  }
}

export default ButtonList;
