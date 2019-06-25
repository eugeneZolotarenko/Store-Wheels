import React, { Component } from "react";
import { Query } from "react-apollo";
import Link from "next/link";
import User from "./User";
import { USER_ORDERS_QUERY } from "./OrderList";
import AccountStyles from "./styles/AccountStyles";

export default class Account extends Component {
  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <Query query={USER_ORDERS_QUERY}>
            {({ data: { orders } }) => (
              <AccountStyles>
                <h3>Hi, {me.name}</h3>
                <p key={me.permissions}>
                  Your Permission{me.permissions.length === 1 ? "" : "s"}:{" "}
                  {me.permissions.map(permission => `|  ${permission}  |`)}
                </p>
                {me.permissions.some(permission =>
                  ["ADMIN", "PERMISSIONUPDATE"].includes(permission)
                ) && (
                  <Link
                    href={{
                      pathname: "/permissions"
                    }}
                  >
                    <a>Manage Permissions of Users</a>
                  </Link>
                )}
                {orders.length > 0 && (
                  <>
                    <p>
                      You have already {orders.length} order
                      {orders.length === 1 ? "" : "s"}!
                    </p>
                    <Link
                      href={{
                        pathname: "/orders"
                      }}
                    >
                      <a>Check your previous Orders</a>
                    </Link>
                  </>
                )}
                {orders.length === 0 && (
                  <>
                    <p>You don't have orders yet...</p>
                    <Link
                      href={{
                        pathname: "/shop"
                      }}
                    >
                      <a>Let's Buy cool wheels for yor Car!</a>
                    </Link>
                  </>
                )}
                <p>Your current Email: {me.email}</p>
                {console.log(me)}
                {console.log(orders.length)}
              </AccountStyles>
            )}
          </Query>
        )}
      </User>
    );
  }
}
