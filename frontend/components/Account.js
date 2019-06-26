import React, { Component } from "react";
import { Query } from "react-apollo";
import Link from "next/link";
import User from "./User";
import { USER_ORDERS_QUERY } from "./OrderList";
import AccountStyles from "./styles/AccountStyles";
import SickButton from "./styles/SickButton";

export default class Account extends Component {
  render() {
    return (
      <User>
        {({ data: { me }, loading, error }) => {
          if (!me) return null;
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;
          return (
            <Query query={USER_ORDERS_QUERY}>
              {({ data: { orders }, loading, error }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <Error error={error} />;
                return (
                  <AccountStyles>
                    <h3>Hi, {me.name}</h3>
                    <div className="permissions-block">
                      <p key={me.permissions}>
                        Your Permission{me.permissions.length === 1 ? "" : "s"}:{" "}
                        {me.permissions.map(
                          permission => `|  ${permission}  |`
                        )}
                      </p>
                      {me.permissions.some(permission =>
                        ["ADMIN", "PERMISSIONUPDATE"].includes(permission)
                      ) && (
                        <SickButton>
                          <Link
                            href={{
                              pathname: "/permissions"
                            }}
                          >
                            <a>Manage Permissions of Users</a>
                          </Link>
                        </SickButton>
                      )}
                    </div>
                    <div className="orders-block">
                      {orders.length > 0 && (
                        <>
                          <p>
                            You have already {orders.length} order
                            {orders.length === 1 ? "" : "s"}!
                          </p>
                          <SickButton>
                            <Link
                              href={{
                                pathname: "/orders"
                              }}
                            >
                              <a>Check your previous Orders</a>
                            </Link>
                          </SickButton>
                        </>
                      )}
                      {orders.length === 0 && (
                        <>
                          <p>You don't have orders yet...</p>
                          <SickButton>
                            <Link
                              href={{
                                pathname: "/shop"
                              }}
                            >
                              <a>Let's Buy cool wheels for yor Car!</a>
                            </Link>
                          </SickButton>
                        </>
                      )}
                    </div>
                    <div className="mail-block">
                      <p>Your current Email: {me.email}</p>
                    </div>
                  </AccountStyles>
                );
              }}
            </Query>
          );
        }}
      </User>
    );
  }
}
