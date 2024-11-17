import { configureStore } from "@reduxjs/toolkit";
import contatosReducers from "./reducers/contatosReducer";
import filtroReducers from "./reducers/filtrosReducers";

const store = configureStore({
  reducer: {
    contatos: contatosReducers,
    filtro: filtroReducers,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
