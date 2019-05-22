import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';


const theme = {
  grey: '#C1C4C3',
  olive: '#8BA390',
  semiblack: '#262527',
  pink: '#FF268E',
  bigRadius: '30px',
  smallRadius: '10px',
  maxWidth: '1210px'
}

const StyledPage = styled.div`
  background: white;
  color: black;
`;
const Inner = styled.div`
  // background: ${props => props.theme.olive};
  // max-width: ${props => props.theme.maxWidth};
  // margin: 0 auto;
  // padding: 2rem;
`;
injectGlobal`
  html {
    font-family: Montserrat;
    box-sizing: border-box;
    font-size: 10px;
  };
  *, *:before, *:after{
    box-sizing: inherit;
  };
  body {
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
  };
  a{
    text-decoration: none;
  }
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}


export default Page;