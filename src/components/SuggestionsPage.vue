<template>
  <div class="page-container">
    <h1 class="page-title">Sugestões de Itens</h1>
    <ul>
      <li v-for="(suggestion, index) in suggestions" :key="index">
        {{ suggestion }}
        <button @click="addItem(suggestion)">Adicionar</button>
      </li>
    </ul>
    <router-link to="/" class="back-button">Voltar</router-link>
  </div>
</template>

<script>
export default {
  name: 'SuggestionsPage',
  data() {
    return {
      suggestions: ['Arroz', 'Feijão', 'Macarrão', 'Óleo', 'Açúcar']
    };
  },
  methods: {
    addItem(name) {
      const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
      items.push({ name, quantity: 1 });
      localStorage.setItem('shoppingList', JSON.stringify(items));
      alert(`${name} foi adicionado à lista de compras.`);
    }
  }
};
</script>

<style scoped>
.page-container {
  width: 90%;
  max-width: 600px;
  background: #fff;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
}
.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
button {
  margin-left: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #369a7c;
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
