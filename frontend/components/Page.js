import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Header from "../components/Header";
import Meta from "../components/Meta";

const theme = {
  grey: "#C1C4C3",
  olive: "#8BA390",
  semiblack: "#262527",
  pink: "#FF268E",
  bigRadius: "30px",
  smallRadius: "10px",
  maxWidth: "1210px",
  buttonShadow: "0px 0px 7px 0px #FF268E"
};

const StyledPage = styled.div`
  background: white;
  color: black;
`;
const Inner = styled.div`
  // background: ${props => props.theme.olive};
  // max-width: ${props => props.theme.maxWidth};
  // margin: 0 auto;
  // padding: 2rem;
  padding-top: 69px;
`;
injectGlobal`
  html {
    font-family: Montserrat;
    box-sizing: border-box;
    font-size: 10px;
    min-width: 320px;
    /* ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-width: 1px 1px 1px 2px;
      border-color: #777;
      background-color: #C1C4C3;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #aaa;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-width: 0;
    }
    ::-webkit-scrollbar-track:hover {
      border-radius: 5px;
      background-color: #eee;
    } */
  };
  *, *:before, *:after{
    box-sizing: border-box;
  };
  body {
    padding: 0;
    margin: 0;
    font-size: 1.7rem;
  };
  a{
    text-decoration: none;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
