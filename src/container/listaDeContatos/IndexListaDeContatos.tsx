import { useSelector } from "react-redux";
import IndexContato from "../../components/contatos/IndexContatos";
import { RootReducer } from "../../store/indexStore";
import { MainContainer } from "../../styles/styles";

const IndexListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos);
  const { termo } = useSelector((state: RootReducer) => state.filtro);

  const filtraTarefas = () => {
    if (!termo) return itens; // Retorna todos os itens se o termo estiver vazio
    return itens.filter(
      (item) =>
        item.titulo && item.titulo.toLowerCase().includes(termo.toLowerCase()) // Verifica se titulo existe
    );
  };

  const contatosFiltrados = filtraTarefas();

  return (
    <MainContainer>
      <ul>
        {contatosFiltrados.map((contato) => (
          <li key={contato.id}>
            <IndexContato
              titulo={contato.titulo}
              email={contato.email}
              telefone={contato.telefone}
              id={contato.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default IndexListaDeContatos;
