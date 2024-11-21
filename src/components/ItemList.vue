<template>
  <div class="page-container">
    <h1 class="page-title">Lista de Compras</h1>
    <div v-if="items.length > 0">
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item.name }} - Quantidade: {{ item.quantity }}
          <button @click="deleteItem(index)">Deletar</button>
        </li>
      </ul>
    </div>
    <p v-else>A lista está vazia.</p>
    <router-link to="/" class="back-button">Voltar</router-link>
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
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #c0392b;
}
.back-button {
  margin-top: 20px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}
.back-button:hover {
  background-color: #369a7c;
}
</style>
