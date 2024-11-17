import BotaoAdd from "../../components/botaoAdd/IndexBotaoAdd";
import IndexBarraLateral from "../../container/barraLateral/IndexlBarraLateral";
import IndexListaDeContatos from "../../container/listaDeContatos/IndexListaDeContatos";

const Home = () => (
  <>
    <IndexBarraLateral />
    <IndexListaDeContatos />
    <BotaoAdd />
  </>
);

export default Home;
