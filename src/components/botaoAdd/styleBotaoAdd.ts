import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Link } from "react-router-dom";

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  height: 64px;
  width: 64px;
  background-color: ${variaveis.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  font-family: "Roboto";
  text-decoration: none;
`;
