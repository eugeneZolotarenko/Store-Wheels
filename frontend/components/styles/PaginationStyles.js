import styled from "styled-components";

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  margin: 2rem 0;
  border: 2px solid ${props => props.theme.olive};
  border-radius: 10px;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${props => props.theme.olive};
    @media (max-width: 500px) {
      padding: 10px 15px;
    }
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: ${props => props.theme.olive};
    pointer-events: none;
  }
`;

export default PaginationStyles;
