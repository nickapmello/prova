<!-- src/components/SuggestionsPage.vue -->
<template>
  <div>
    <h2>Sugestões de Itens</h2>
    <ul>
      <li v-for="(suggestion, index) in suggestions" :key="index">
        {{ suggestion }}
        <button @click="addItem(suggestion)">Adicionar</button>
      </li>
    </ul>
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
</style>
