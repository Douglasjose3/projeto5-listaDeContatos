import * as S from "./styleCards";

export type Props = {
  ativo?: boolean;
  alfabeto: string;
  legenda: string;
};

const IndexCards = ({ ativo, alfabeto, legenda }: Props) => {
  return (
    <S.Card ativo={ativo}>
      <S.Alphabet>{alfabeto}</S.Alphabet>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  );
};

export default IndexCards;
