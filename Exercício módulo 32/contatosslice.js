import { createSlice } from '@reduxjs/toolkit';

export const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [],
  reducers: {
    adicionarContato: (state, action) => {
      state.push(action.payload);
    },
    removerContato: (state, action) => {
      return state.filter(contato => contato.id !== action.payload);
    },
    editarContato: (state, action) => {
      const index = state.findIndex(contato => contato.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { adicionarContato, removerContato, editarContato } = contatosSlice.actions;

export default contatosSlice.reducer;
