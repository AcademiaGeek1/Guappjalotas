import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarTitulo = styled.h1`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 41px;
`;

export const FoodsTitulo = styled.h5`
  text-decoration: none;
  text-decoration:'inherit';
  color:'inherit';
`;

export const FoodSubtitulo = styled.h6`
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;