<template>
  <div class="page-container">
    <h1 class="page-title">Adicionar Item</h1>
    <form @submit.prevent="addItem" class="form-container">
      <input
        v-model="name"
        type="text"
        placeholder="Nome do item"
        class="input-field"
        required
      />
      <input
        v-model.number="quantity"
        type="number"
        placeholder="Quantidade"
        class="input-field"
        required
      />
      <button type="submit" class="add-button">
        <i class="fas fa-plus"></i> Adicionar
      </button>
    </form>
    <div class="action-buttons">
      <router-link to="/list" class="view-list-button">
        <i class="fas fa-list"></i> Ver Lista
      </router-link>
      <router-link to="/" class="back-button">
        <i class="fas fa-arrow-left"></i> Voltar
      </router-link>
    </div>
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
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.input-field {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
.add-button {
  background: linear-gradient(90deg, #42b983, #369a7c);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}
.add-button:hover {
  background: linear-gradient(90deg, #369a7c, #2d7a65);
  transform: translateY(-2px);
}
.add-button i {
  margin-right: 5px;
}
.action-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.view-list-button,
.back-button {
  text-decoration: none;
  background-color: #555;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}
.view-list-button:hover,
.back-button:hover {
  background-color: #333;
  transform: translateY(-2px);
}
.view-list-button i,
.back-button i {
  margin-right: 5px;
}
</style>
