import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 40px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 10px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;
    border: 1.5px solid ${props => props.theme.olive};
    font-family: Montserrat;
    border-radius: 5px;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.pink};
    }
  }
  .hide-input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .uploud-btn,
  button,
  input[type="submit"] {
    min-height: 38px;
    border: none;
    width: fit-content;
    font-size: 19px;
    font-weight: 700;
    color: white;
    background-color: ${props => props.theme.olive};
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 1rem;
    margin: 3rem auto 0 auto;
    border-radius: 10px;
    transition: 0.3s;
    font-family: Montserrat;
    &:hover {
      background-color: ${props => props.theme.pink};
      box-shadow: ${props => props.theme.buttonShadow};
    }
  }
  /* button,
  input[type="submit"] {
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
  } */
  fieldset {
    border-radius: 10px;
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.9;
    }
    &::before {
      height: 15px;
      content: "";
      display: block;
      border-radius: 10px;
      background-image: linear-gradient(
        to right,
        #ff268e 0%,
        #8ba390 50%,
        #ff268e 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 1s linear infinite;
    }
  }
`;

export default Form;
