<!-- src/components/ItemForm.vue -->
<template>
  <div class="item-form">
    <h2>Cadastrar Item para a Lista de Compras</h2>
    <form @submit.prevent="addItem">
      <div class="form-group">
        <label for="itemName">Nome do Item:</label>
        <input v-model="itemName" id="itemName" placeholder="Ex: Maçã" required />
      </div>
      <div class="form-group">
        <label for="quantity">Quantidade:</label>
        <input v-model.number="quantity" id="quantity" type="number" min="1" placeholder="Ex: 5" required />
      </div>
      <button type="submit" class="btn-add">Adicionar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: '',
      quantity: 1,
      items: JSON.parse(localStorage.getItem('shoppingList')) || []
    };
  },
  methods: {
    addItem() {
      if (this.itemName.trim() && this.quantity > 0) {
        this.items.push({ name: this.itemName, quantity: this.quantity });
        localStorage.setItem('shoppingList', JSON.stringify(this.items));
        this.itemName = '';
        this.quantity = 1;
        this.$router.push('/list');
      }
    }
  }
};
</script>

<style scoped>
.item-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
}
.item-form h2 {
  text-align: center;
  color: #2c3e50;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  font-weight: bold;
  color: #2c3e50;
}
.form-group input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.5);
}
.btn-add {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn-add:hover {
  background-color: #369a7c;
}
</style>
