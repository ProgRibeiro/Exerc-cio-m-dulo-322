import React from 'react';
import ListaDeContatos from './components/ListaDeContatos';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListaDeContatos />
      </div>
    </Provider>
  );
}

export default App;
