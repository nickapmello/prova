<template>
  <div class="page-container">
    <h1 class="page-title">Página Inicial</h1>
    <p>Bem-vindo! Selecione uma das opções abaixo para começar:</p>
    <div class="menu-container">
      <router-link to="/add" class="menu-option">Adicionar Item</router-link>
      <router-link to="/list" class="menu-option">Listar Itens</router-link>
      <router-link to="/suggestions" class="menu-option">Sugestões de Itens</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.menu-option {
  text-decoration: none;
  background-color: #42b983;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.menu-option:hover {
  background-color: #369a7c;
  transform: translateY(-3px);
}
</style>
