import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${variaveis.cinzaBgAside};
  height: 100vh;
`;

export const CardBarralateral = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  text-align: center;
`;