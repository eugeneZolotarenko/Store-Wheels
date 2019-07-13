import styled from "styled-components";

const Table = styled.table`
  border-spacing: 0;
  width: 100vw;
  border: 1px solid ${props => props.theme.olive};
  box-shadow: 0px 4px 18px 0px ${props => props.theme.olive};
  padding: 5px;
  border-radius: 10px;
  max-width: calc(${props => props.theme.maxWidth} + 30px);
  margin: auto;
  thead {
    font-size: 10px;
  }
  td,
  th {
    border-bottom: 1px solid ${props => props.theme.olive};
    border-right: 1px solid ${props => props.theme.olive};
    position: relative;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
    label {
      padding: 10px 5px;
      display: block;
    }
  }
  tr {
    &:hover {
      background: ${props => props.theme.offWhite};
    }
  }
`;

export default Table;
