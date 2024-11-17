import * as S from "./styleBarraLateral";
import { Campo } from "../../styles/styles";
import IndexCards from "../../components/cards/indexCards";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store/indexStore";
import { alterarTermo } from "../../store/reducers/filtrosReducers";

const IndexBarraLateral = () => {
  const dispatch = useDispatch();
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  const letras = [
    { alfabeto: "A", legenda: "1 contato", criterio: "titulo A" },
    { alfabeto: "B", legenda: "2 contatos", criterio: "titulo B" },
    { alfabeto: "C", legenda: "3 contatos", criterio: "titulo" },
    { alfabeto: "D", legenda: "4 contatos", criterio: "titulo" },
    { alfabeto: "E", legenda: "5 contatos", criterio: "titulo" },
    { alfabeto: "F", legenda: "6 contatos", criterio: "titulo" },
    { alfabeto: "G", legenda: "7 contatos", criterio: "titulo" },
    { alfabeto: "H", legenda: "8 contatos", criterio: "titulo" },
    { alfabeto: "I", legenda: "9 contatos", criterio: "titulo" },
    { alfabeto: "J", legenda: "10 contatos", criterio: "titulo" },
    { alfabeto: "K", legenda: "11 contatos", criterio: "titulo" },
    { alfabeto: "L", legenda: "12 contatos", criterio: "titulo" },
    { alfabeto: "M", legenda: "13 contatos", criterio: "titulo" },
    { alfabeto: "N", legenda: "14 contatos", criterio: "titulo" },
    { alfabeto: "O", legenda: "15 contatos", criterio: "titulo" },
    { alfabeto: "P", legenda: "16 contatos", criterio: "titulo" },
    { alfabeto: "Q", legenda: "17 contatos", criterio: "titulo" },
    { alfabeto: "R", legenda: "18 contatos", criterio: "titulo" },
    { alfabeto: "S", legenda: "19 contatos", criterio: "titulo" },
    { alfabeto: "T", legenda: "20 contatos", criterio: "titulo" },
    { alfabeto: "U", legenda: "21 contatos", criterio: "titulo" },
    { alfabeto: "V", legenda: "22 contatos", criterio: "titulo" },
    { alfabeto: "W", legenda: "23 contatos", criterio: "titulo" },
    { alfabeto: "X", legenda: "24 contatos", criterio: "titulo" },
    { alfabeto: "Y", legenda: "25 contatos", criterio: "titulo" },
    { alfabeto: "Z", legenda: "26 contatos", criterio: "titulo" },
  ];

  return (
    <S.Aside>
      <div>
        <Campo
          id="campo-buscar"
          type="text"
          placeholder="Buscar contato"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </div>
      <S.CardBarralateral>
        {letras.map((letra, index) => (
          <IndexCards
            key={index}
            alfabeto={letra.alfabeto}
            legenda={letra.legenda}
          />
        ))}
        <IndexCards ativo alfabeto="todas" legenda="50 contatos" />
      </S.CardBarralateral>
    </S.Aside>
  );
};

export default IndexBarraLateral;
