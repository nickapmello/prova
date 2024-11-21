<template>
  <div class="page-container">
    <h1 class="page-title">Lista de Compras</h1>
    <div v-if="items.length > 0">
      <ul class="item-list">
        <li v-for="(item, index) in items" :key="index" class="item">
          <span>{{ item.name }} - Quantidade: {{ item.quantity }}</span>
          <button @click="deleteItem(index)" class="delete-button">Deletar</button>
        </li>
      </ul>
    </div>
    <div v-else class="empty-list">
      <p>Sua lista está vazia.</p>
      <router-link to="/add" class="add-first-button">
        Adicione aqui seu primeiro item
      </router-link>
    </div>
    <router-link to="/" class="back-button">
      Voltar
    </router-link>
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
      this.items.splice(index, 1);  /* trocar pra list com id **/
      localStorage.setItem('shoppingList', JSON.stringify(this.items));
    }
  }
};
</script>

<style scoped>
/* Container principal */
.page-container {
  width: 90%;
  max-width: 500px;
  background: #fff;
  border: 2px solid black;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
  overflow: hidden; /* Evita overflow */
}

/* Título */
.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

/* Lista de itens */
.item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.item span {
  font-size: 16px;
  text-align: left;
}
.delete-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.delete-button:hover {
  background-color: #c0392b;
}

/* Estilo para lista vazia */
.empty-list {
  text-align: center;
  margin-top: 20px;
}
.add-first-button {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-bottom: 10px;
}
.add-first-button:hover {
  background-color: #369a7c;
}

/* Botão voltar */
.back-button {
  display: inline-block;
  background-color: #555;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-top: 10px;
}
.back-button:hover {
  background-color: #333;
}
</style>
