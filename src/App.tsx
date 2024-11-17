import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "./styles/styles";
import EstiloGlobal from "./styles/styles";
import store from "./store/indexStore";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/IndexCadastro";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "novo",
    element: <Cadastro />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  );
}

export default App;
