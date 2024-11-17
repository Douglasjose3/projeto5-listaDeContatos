import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Props } from "./indexCards";

type PropsSemAlfabetoEContador = Omit<Props, "alfabeto" | "legenda">;

export const Card = styled.div<PropsSemAlfabetoEContador>`
  padding: 8px;
  border: 1px solid
    ${(props) => (props.ativo ? variaveis.azulAtivo : variaveis.cinzaMedio)};
  background-color: ${(props) => (props.ativo ? "#fff" : variaveis.cinzaClaro)};
  color: ${(props) =>
    props.ativo ? variaveis.azulAtivo : variaveis.cinzaEscuro};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Alphabet = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 14px;
`;
