import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from './contatosSlice';

export default configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});
