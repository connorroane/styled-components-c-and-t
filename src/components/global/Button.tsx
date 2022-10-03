import styled from "styled-components";
import StyledCard from "./Card";


export const Button = styled.button`
  height: 2rem;
  width: 4rem;
  &:hover ${StyledCard}:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`