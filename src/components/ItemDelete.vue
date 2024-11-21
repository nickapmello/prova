<template>
    <div>
      <h2>Excluir Todos os Itens da Lista de Compras</h2>
      <p>Você tem certeza que deseja excluir todos os itens da lista de compras?</p>
      <button @click="deleteAllItems">Sim, excluir todos</button>
      <button @click="$router.push('/list')">Cancelar</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      deleteAllItems() {
        localStorage.removeItem('shoppingList');
        this.$router.push('/list'); // Redireciona para a lista após a exclusão
      }
    }
  };
  </script>
  
  <style>
  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #c0392b;
  }
  </style>
  