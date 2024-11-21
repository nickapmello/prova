<template>
  <div class="page-container">
    <h1 class="page-title">Adicionar Item</h1>
    <form @submit.prevent="addItem">
      <input v-model="name" type="text" placeholder="Nome do item" required />
      <input v-model.number="quantity" type="number" placeholder="Quantidade" required />
      <button type="submit">Adicionar</button>
    </form>
    <router-link to="/" class="back-button">Voltar</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      quantity: 1
    };
  },
  methods: {
    addItem() {
      const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
      items.push({ name: this.name, quantity: this.quantity });
      localStorage.setItem('shoppingList', JSON.stringify(items));
      alert(`${this.name} foi adicionado à lista de compras.`);
      this.name = '';
      this.quantity = 1;
    }
  }
};
</script>

<style scoped>
input {
  margin: 5px;
  padding: 5px;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #369a7c;
}
</style>
