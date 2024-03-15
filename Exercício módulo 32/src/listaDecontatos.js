import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adicionarContato, removerContato, editarContato } from '../redux/contatosSlice';
import styled from 'styled-components';

const ContatoItem = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
`;

const ListaDeContatos = () => {
  const contatos = useSelector((state) => state.contatos);
  const dispatch = useDispatch();
  import React, { useState } from 'react';
  import { useSelector, useDispatch } from 'react-redux';
  import { adicionarContato, removerContato, editarContato } from '../redux/contatosSlice';
  import styled from 'styled-components';
  
  const ContatoItem = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  `;
  
  const Form = styled.form`
    margin: 20px 0;
  `;
  
  const Input = styled.input`
    margin: 0 10px;
  `;
  
  const ListaDeContatos = () => {
    const contatos = useSelector((state) => state.contatos);
    const dispatch = useDispatch();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [id, setId] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(id !== null) {
        dispatch(editarContato({ id, nome, email, telefone }));
      } else {
        const id = Date.now();
        dispatch(adicionarContato({ id, nome, email, telefone }));
      }
      setNome('');
      setEmail('');
      setTelefone('');
      setId(null);
    };
  
    const handleEdit = (contato) => {
      setNome(contato.nome);
      setEmail(contato.email);
      setTelefone(contato.telefone);
      setId(contato.id);
    };
  
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <button type="submit">{id ? "Editar" : "Adicionar"}</button>
        </Form>
        {contatos.map((contato) => (
          <ContatoItem key={contato.id}>
            {contato.nome} - {contato.email} - {contato.telefone}
            <button onClick={() => dispatch(removerContato(contato.id))}>Remover</button>
            <button onClick={() => handleEdit(contato)}>Editar</button>
          </ContatoItem>
        ))}
      </div>
    );
  };
  
  export default ListaDeContatos;
  

  return (
    <div>
      {contatos.map((contato) => (
        <ContatoItem key={contato.id}>
          {contato.nome} - {contato.email} - {contato.telefone}
          {/* Botões para editar e remover */}
        </ContatoItem>
      ))}
      {/* Formulário para adicionar/editar contatos */}
    </div>
  );
};

export default ListaDeContatos;
