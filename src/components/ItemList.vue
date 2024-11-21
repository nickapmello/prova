<template>
    <div>
      <h2>Lista de Compras</h2>
      <ul v-if="items.length > 0">
        <li v-for="(item, index) in items" :key="index">
          {{ item.name }} - Quantidade: {{ item.quantity }}
          <button @click="deleteItem(index)">Deletar</button>
        </li>
      </ul>
      <p v-else>A lista está vazia.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: JSON.parse(localStorage.getItem('shoppingList')) || []
      };
    },
    methods: {
      deleteItem(index) {
        this.items.splice(index, 1);
        localStorage.setItem('shoppingList', JSON.stringify(this.items));
      }
    },
    watch: {
      items(newItems) {
        localStorage.setItem('shoppingList', JSON.stringify(newItems));
      }
    }
  };
  </script>
  
  <style>
  button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
  }
  button:hover {
    background-color: #c0392b;
  }
  </style>
  