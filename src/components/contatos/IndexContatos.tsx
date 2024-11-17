import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./styleContatos";
import { Botao, Input } from "../../styles/styles";
import { remover, editar } from "../../store/reducers/contatosReducer";
import ContatosModels from "../../models/ContatosModels";

type Props = ContatosModels;

const IndexContatos = ({
  titulo,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id,
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [email, setEmail] = useState(emailOriginal);
  const [telefone, setTelefone] = useState(telefoneOriginal?.toString() || "");

  useEffect(() => {
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal?.toString() || "");
  }, [emailOriginal, telefoneOriginal]);

  const cancelarEdicao = () => {
    setEstaEditando(false);
    setEmail(emailOriginal);
    setTelefone(telefoneOriginal?.toString() || "");
  };

  const salvarEdicao = () => {
    if (!email || !telefone) {
      alert("Preencha todos os campos antes de salvar.");
      return;
    }

    dispatch(
      editar({
        titulo,
        email,
        telefone: Number(telefone),
        id,
      })
    );
    setEstaEditando(false);
  };

  return (
    <S.CardContato>
      <S.Nome>{titulo}</S.Nome>
      <Input
        type="email"
        placeholder="e-mail"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        disabled={!estaEditando}
      />
      <Input
        type="text"
        placeholder="telefone"
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        disabled={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={salvarEdicao}>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.CardContato>
  );
};

export default IndexContatos;
