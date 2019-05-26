import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import EncBlock from './styles/EncBlock';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id 
      title 
      price
      description
      image
      largeImage
    }
  }
`;
const ItemsBlock = styled.div`
  width: 100%;
`

const Center = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`
const ItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

class Items extends Component {
  render() {
    return (
      <ItemsBlock>
      <EncBlock>
        <div className="encourage-block">
            <div className="encourage-wrapper">
              <div className="encourage-words">
                <h1>Looking for stylish wheels<br/>for your car?<br/><br/>So, Let’s go!</h1>
              </div>
              <button className="arrow-next-block"><img src="../static/arrow.svg"/></button>
              <img className="main-car" src="../static/gt86.png" alt="Toyota GT-86" />
            </div>
          <div className="wave"></div>
        </div>
      </EncBlock>
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading}) => {
            console.log(data);
            if (loading) return <p>Loading...</p>;
            if (error) return <p> Error: {error.message}</p>
            return <ItemsList>
              {data.items.map(item => <Item item={item} key={item.id}/>)} 
            </ItemsList>
          }}
        </Query>
      </Center>
      </ItemsBlock>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY };