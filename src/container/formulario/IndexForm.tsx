import { FormEvent, useState } from "react";
import {
  BotaoCancelarRemover,
  BotaoSalvar,
} from "../../components/contatos/styleContatos";
import { MainContainer, Titulo, Input } from "../../styles/styles";
import { useDispatch } from "react-redux";
import ContatosModels from "../../models/ContatosModels";
import { cadastrar } from "../../store/reducers/contatosReducer";
import { Form } from "./styleForm";
import { useNavigate } from "react-router-dom";

const IndexForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault();

    const id = Date.now();

    const contato = new ContatosModels(titulo, email, Number(telefone), id);

    dispatch(cadastrar(contato));

    navigate("/");
  };

  const cancelarCadastro = () => {
    navigate("/");
  };

  return (
    <MainContainer>
      <Titulo>Novo cadastro</Titulo>
      <Form>
        <Input
          type="text"
          placeholder="nome"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <Input
          type="number"
          placeholder="telefone"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
        <BotaoSalvar type="submit" onClick={cadastrarContato}>
          Cadastrar
        </BotaoSalvar>
        <BotaoCancelarRemover type="button" onClick={cancelarCadastro}>
          Cancelar
        </BotaoCancelarRemover>
      </Form>
    </MainContainer>
  );
};

export default IndexForm;
