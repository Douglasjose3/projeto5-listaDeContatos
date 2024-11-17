import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContatosModels from "../../models/ContatosModels";

type ContatosState = {
  itens: ContatosModels[];
};

const initialState: ContatosState = {
  itens: [
    {
      titulo: "João",
      email: "joao@joao.com",
      telefone: 999999,
      id: 1,
    },
    {
      titulo: "Vanessa",
      email: "vanessa@vanessa.com",
      telefone: 999999,
      id: 2,
    },
    {
      titulo: "Murilo",
      email: "murilo@murilo.com",
      telefone: 999999,
      id: 3,
    },
  ],
};

const contatosSlice = createSlice({
  name: "contato",
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<ContatosModels>) => {
      const indexDoContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      );
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<ContatosModels>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.titulo.toLocaleLowerCase() ===
          action.payload.titulo.toLocaleLowerCase()
      );

      if (contatoJaExiste) {
        alert("Esse contato já existe!");
      } else {
        state.itens.push(action.payload);
      }
    },
  },
});

export const { remover, editar, cadastrar } = contatosSlice.actions;

export default contatosSlice.reducer;
