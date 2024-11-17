import styled, { createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Dosis", serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`;

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`;

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: bold;
`;

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  /* border: none; */
  ::placeholder {
    color: red !important;
  }
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Input = styled(Campo)`
  background-color: ${variaveis.cinzaClaro};
  margin-bottom: 16px;
  border: none;
`;

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinzaMaisEscuro};
  border-radius: 8px;
  margin-right: 8px;
  margin-top: 16px;
`;

export default EstiloGlobal;
