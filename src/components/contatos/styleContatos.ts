import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Botao } from "../../styles/styles";

export const CardContato = styled.div`
  border-radius: 16px;
  background-color: ${variaveis.cinzaBgAside};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin: 16px 0;
`;

export const Nome = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
  color: ${variaveis.cinzaMaisEscuro};
  margin-bottom: 16px;
`;

export const BarraAcoes = styled.div`
  border-top: 1px solid ${variaveis.cinzaMaisEscuro};
`;

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`;

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`;
