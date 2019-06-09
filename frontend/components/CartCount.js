import React from "react";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: 0.4s;
    backface-visibility: hidden;
    font-size: 0.85em;
  }
  .count-enter {
    transform: rotateX(0);
  }
  .count-enter-active {
    transform: rotateX(0.5turn);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: rotateX(0.5turn);
  }
`;

const Dot = styled.div`
  background: ${props => props.theme.pink};
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2rem;
  min-width: 3.5rem;
  margin-left: 1rem;
  font-weight: 400;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
`;

const CartCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
);

export default CartCount;
