import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import styled from "styled-components";

const SellBlock = styled.div`
  padding: 5% 0 5% 0;
`;

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "stock-wheels");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dh0buwk25/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };
  render() {
    return (
      <SellBlock>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <Form
              data-test="form"
              onSubmit={async e => {
                // Stop the form from submitting
                e.preventDefault();
                // call the mutation
                const res = await createItem();
                //  change them to the single item page
                Router.push({
                  pathname: "/item",
                  query: { id: res.data.createItem.id }
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label className="uploud-btn" htmlFor="file">
                  Upload Your Image...
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upoload an image"
                    required
                    onChange={this.uploadFile}
                    className="hide-input"
                  />
                  {this.state.image && (
                    <img
                      width="200px"
                      src={this.state.image}
                      alt="Upload preview"
                    />
                  )}
                </label>

                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="price">
                  Price
                  <input
                    type="number"
                    id="price"
                    name="price"
                    placeholder="Price"
                    required
                    value={this.state.price}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter A Description"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          )}
        </Mutation>
      </SellBlock>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
